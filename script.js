let currentLang = 'zh-Hant';
const backgroundImages = [
    { id: 'bg1', path: 'images/bg1.png' }, { id: 'bg2', path: 'images/bg2.png' }, { id: 'bg3', path: 'images/bg3.png' },
];
const backgroundGradients = [
    { id: 'daylight', colors: ['#a1c4fd', '#c2e9fb'] }, { id: 'dawn', colors: ['#f6d365', '#fda085'] },
    { id: 'valley', colors: ['#f093fb', '#f5576c'] }, { id: 'night', colors: ['#2c3e50', '#1a293f'] },
];

function setLanguage(lang) {
    currentLang = lang; document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang][key] !== undefined) {
            const translation = translations[lang][key];
            if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') { el.placeholder = translation; }
            else if (key.startsWith('inst_') || key.startsWith('faq_') || key === 'status_error_general' || key === 'sim_desc' || key === 'sim_disclaimer_text' || key === 'measurement_notice_body') { el.innerHTML = translation; }
            else { el.textContent = translation; }
        }
    });
    document.querySelectorAll('.lang-option').forEach(span => {
        span.classList.toggle('active', span.dataset.lang === lang);
    });
}

function t(key) { return translations[currentLang][key] || key; }

function decodeAndCalculate(rawData) {
    try {
        const startMarker = "ImJvZHki";
        const startIndex = rawData.indexOf(startMarker);
        if (startIndex === -1) {
            return { error: t('status_error_general') };
        }

        let b64Str = rawData.substring(startIndex);
        b64Str = b64Str.replace(/-/g, '+').replace(/_/g, '/');
        const padding = b64Str.length % 4;
        if (padding) {
            b64Str += '='.repeat(4 - padding);
        }

        const decodedText = atob(b64Str);

        let height;

        const heightKeyIndex = decodedText.search(/eight/);
        if (heightKeyIndex === -1) {
            return { error: t('status_error_general') };
        }

        const heightSearchArea = decodedText.substring(heightKeyIndex + 5);
        const negativeHeightMatch = heightSearchArea.match(/^"?:(-?\d+\.?\d*)/);
        if (negativeHeightMatch) {
            height = parseFloat(negativeHeightMatch[1]);
        } else {
            const fuzzyHeightMatch = heightSearchArea.match(/^"?:(\d+)\.?/);
            if (fuzzyHeightMatch) {
                height = parseFloat(fuzzyHeightMatch[1]);
            } else {
                return { error: t('status_error_general') };
            }
        }

        let scale;

        const scaleKeyIndex = decodedText.search(/scale/);
        if (scaleKeyIndex === -1) {
            return { error: t('status_error_general') };
        }

        const scaleSearchArea = decodedText.substring(scaleKeyIndex + 5);

        const scientificMatch = scaleSearchArea.match(/[":]*(\d+\.?\d*)[eE]([-+]?\d+)/);
        if (scientificMatch) {
            const base = parseFloat(scientificMatch[1]);
            const exponent = parseInt(scientificMatch[2]);
            scale = base * Math.pow(10, exponent);
        } else {
            const standardFloatMatch = scaleSearchArea.match(/[":]*(\d*\.\d+)/);
            if (standardFloatMatch) {
                scale = parseFloat(standardFloatMatch[1]);
            } else {
                let integerMatch = null;

                const searchWindow = scaleSearchArea.substring(0, 30);

                integerMatch = searchWindow.match(/^.{0,10}(\d{1,10})/);

                if (integerMatch) {
                    const scaleInt = parseInt(integerMatch[1]);

                    if (scaleInt < 100) {
                        scale = scaleInt / 1000000000.0;
                    } else {
                        scale = scaleInt / 1000000000.0;
                    }
                } else {
                    return { error: t('status_error_general') };
                }
            }
        }

        const currentHeight = 7.6 - (8.3 * scale) - (3 * height);
        const shortestHeight = 7.6 - (8.3 * scale) - (3 * -2.0);
        const tallestHeight = 7.6 - (8.3 * scale) - (3 * 2.0);

        const jsonResult = {
            height_raw: height,
            scale_raw: scale
        };

        return {
            current: currentHeight,
            tallest: tallestHeight,
            shortest: shortestHeight,
            scale: scale,
            timestamp: new Date().getTime(),
            note: "",
            json: jsonResult
        };
    } catch (e) {
        console.error("Calculation failed:", e);
        return { error: t('status_error_general') };
    }
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = (progress * (end - start) + start).toFixed(4);
        if (progress < 1) { window.requestAnimationFrame(step); }
    };
    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
    const dom = {
        calculateBtn: document.getElementById('calculate-btn'), b64Input: document.getElementById('b64-input'),
        resCurrent: document.getElementById('res-current'), resTallest: document.getElementById('res-tallest'),
        resShortest: document.getElementById('res-shortest'),
        resJson: document.getElementById('res-json'),
        statusEl: document.getElementById('status'),
        copyBtn: document.getElementById('copy-btn'), imageBtn: document.getElementById('image-btn'),
        resultActions: document.getElementById('result-actions'), langSwitcher: document.getElementById('lang-switcher'),
        themeSwitcher: document.getElementById('theme-switcher'), themeIconLight: document.getElementById('theme-icon-light'),
        themeIconDark: document.getElementById('theme-icon-dark'), historyContainer: document.getElementById('history'),
        historyList: document.getElementById('history-list'), clearHistoryBtn: document.getElementById('clear-history-btn'),
        docHtml: document.documentElement, bgSelector: document.getElementById('bg-selector'),
        gradientSelector: document.getElementById('gradient-selector'),
        textColorSelector: document.getElementById('text-color-selector'), playerNameInput: document.getElementById('player-name'),
        customizationOptions: document.querySelector('.customization-options'),
        uploadBgInput: document.getElementById('upload-bg'), uploadedImagePreview: document.getElementById('uploaded-image-preview'),
        previewCanvas: document.getElementById('preview-canvas'),
        textAlignSelector: document.getElementById('text-align-selector'),
        showRangeToggle: document.getElementById('show-range-toggle'),
        simulatorContainer: document.getElementById('simulator-container'),
        drinkPotionBtn: document.getElementById('drink-potion-btn'),
        resetSimBtn: document.getElementById('reset-sim-btn'),
        potionResult: document.getElementById('potion-result'),
        potionCount: document.getElementById('potion-count'),
        potionExtremeNotice: document.getElementById('potion-extreme-notice'),
        qrUploadArea: document.getElementById('qr-upload-area'),
        qrFileInput: document.getElementById('qr-file-input'),
        qrCanvas: document.getElementById('qr-canvas')
    };
    let history = [];
    let uploadedImageUrl = null;
    let lastResult = null;
    let lastCalculatedScale = null;
    let potionCounter = 0;
    function saveHistory() { localStorage.setItem('skyHeightHistory', JSON.stringify(history)); }
    function loadHistory() {
        const savedHistory = localStorage.getItem('skyHeightHistory');
        history = savedHistory ? JSON.parse(savedHistory) : [];
        if (history.length > 0) {
            dom.historyContainer.style.display = 'block';
            renderHistory();
        }
    }
    function renderHistory() {
        dom.historyList.innerHTML = '';
        history.forEach((item, index) => {
            const currentHeightDisplay = item.current ? item.current.toFixed(4) : 'N/A';
            const li = document.createElement('li');
            const date = new Date(item.timestamp).toLocaleString();
            li.innerHTML = `
                <button class="delete-history-item" data-index="${index}" title="${t('confirm_delete_item')}">×</button>
                <div class="history-item-main">
                    <span class="history-value">${t('history_current_label')}: ${currentHeightDisplay}</span>
                    <span class="timestamp">${date}</span>
                </div>
                <button class="history-note" data-index="${index}">${item.note || t('history_note_placeholder')}</button>
            `;
            dom.historyList.appendChild(li);
        });
    }
    dom.historyList.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('history-note')) {
            const index = e.target.dataset.index;
            const currentNote = history[index].note || "";
            const newNote = prompt(t('history_note_placeholder'), currentNote);
            if (newNote !== null) {
                history[index].note = newNote.trim();
                saveHistory();
                renderHistory();
            }
        }
        if (e.target && e.target.classList.contains('delete-history-item')) {
            const index = parseInt(e.target.dataset.index, 10);
            if (confirm(t('confirm_delete_item'))) {
                history.splice(index, 1);
                saveHistory();
                renderHistory();
                dom.statusEl.innerHTML = t('item_deleted');
                if (history.length === 0) {
                    dom.historyContainer.style.display = 'none';
                }
            }
        }
    });
    dom.clearHistoryBtn.addEventListener('click', () => {
        if (confirm(t('confirm_clear_history'))) {
            history = [];
            saveHistory();
            dom.historyContainer.style.display = 'none';
        }
    });
    function applyTheme(theme) {
        dom.docHtml.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        dom.themeIconLight.style.display = theme === 'dark' ? 'none' : 'block';
        dom.themeIconDark.style.display = theme === 'dark' ? 'block' : 'none';
    }
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    dom.themeSwitcher.addEventListener('click', () => {
        applyTheme(dom.docHtml.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        updatePreview();
    });

    dom.langSwitcher.addEventListener('click', (e) => {
        const langToggle = e.target.closest('.lang-option');
        if (langToggle) {
            setLanguage(langToggle.dataset.lang);
            renderHistory();
            updatePreview();
        }
    });

    function populateBgSelectors() {
        dom.bgSelector.innerHTML = '';
        backgroundImages.forEach((img, index) => {
            const imgEl = document.createElement('button');
            imgEl.type = 'button';
            imgEl.style.backgroundImage = `url(${img.path})`;
            imgEl.classList.add('selectable-option', 'bg-selection');
            imgEl.dataset.type = 'image';
            imgEl.dataset.source = img.path;
            if (index === 0) imgEl.classList.add('active');
            dom.bgSelector.appendChild(imgEl);
        });
        dom.gradientSelector.innerHTML = '';
        backgroundGradients.forEach((grad) => {
            const gradEl = document.createElement('button');
            gradEl.type = 'button';
            gradEl.classList.add('selectable-option', 'bg-selection', 'gradient-option');
            gradEl.style.background = `linear-gradient(to bottom right, ${grad.colors[0]}, ${grad.colors[1]})`;
            gradEl.dataset.type = 'gradient';
            gradEl.dataset.colors = grad.colors.join(',');
            dom.gradientSelector.appendChild(gradEl);
        });
    }
    const drawCanvasContent = (ctx, canvas) => {
        if (!lastResult) {
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--details-bg');
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            return;
        }
        const playerName = dom.playerNameInput.value;
        const textColor = document.querySelector('.text-color-option.active').dataset.color;
        const textAlign = document.querySelector('.text-align-option.active').dataset.align;
        ctx.fillStyle = textColor === 'white' ? '#FFFFFF' : '#2c3e50';
        ctx.textAlign = textAlign;
        ctx.textBaseline = 'top';
        ctx.shadowColor = textColor === 'white' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)';
        ctx.shadowBlur = 5;
        let x;
        if (textAlign === 'left') {
            x = 25;
        } else if (textAlign === 'right') {
            x = canvas.width - 25;
        } else {
            x = canvas.width / 2;
        }
        const baseFont = '"PingFang TC", "Microsoft JhengHei", "Helvetica Neue", sans-serif';
        if (playerName) {
            ctx.font = `20px ${baseFont}`;
            ctx.fillText(playerName, x, 20);
        }
        ctx.font = `bold 30px ${baseFont}`;
        ctx.fillText(t('res_current'), x, playerName ? 60 : 50);

        ctx.font = `bold 70px "Courier New", Courier, monospace`;
        ctx.fillText(lastResult.current.toFixed(4), x, 95);

        if (dom.showRangeToggle.checked) {
            ctx.font = `20px ${baseFont}`;
            const rangeText = `${t('res_tallest')} ${lastResult.tallest.toFixed(4)} | ${t('res_shortest')} ${lastResult.shortest.toFixed(4)}`;
            ctx.fillText(rangeText, x, 180);
        }

        ctx.font = `12px "Arial", sans-serif`;
        ctx.globalAlpha = 0.8;
        ctx.textAlign = 'center';
        ctx.fillText('Generated by sky-cotl-height-tool', canvas.width / 2, 220);
        ctx.globalAlpha = 1.0;
    };
    const updatePreview = () => {
        const ctx = dom.previewCanvas.getContext('2d');
        const activeBg = document.querySelector('.bg-selection.active');

        ctx.clearRect(0, 0, dom.previewCanvas.width, dom.previewCanvas.height);
        if (!activeBg) {
            drawCanvasContent(ctx, dom.previewCanvas);
            return;
        }
        if (activeBg.dataset.type === 'image' || activeBg.dataset.type === 'uploaded') {
            const bgImage = new Image();
            bgImage.crossOrigin = "Anonymous";
            bgImage.src = activeBg.dataset.source;
            bgImage.onload = () => {
                ctx.drawImage(bgImage, 0, 0, dom.previewCanvas.width, dom.previewCanvas.height);
                ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
                ctx.fillRect(0, 0, dom.previewCanvas.width, dom.previewCanvas.height);
                drawCanvasContent(ctx, dom.previewCanvas);
            };
            bgImage.onerror = () => {
                ctx.fillStyle = 'red';
                ctx.fillRect(0, 0, dom.previewCanvas.width, dom.previewCanvas.height);
                drawCanvasContent(ctx, dom.previewCanvas);
            };
        } else {
            const colors = activeBg.dataset.colors.split(',');
            const gradient = ctx.createLinearGradient(0, 0, dom.previewCanvas.width, dom.previewCanvas.height);
            gradient.addColorStop(0, colors[0]);
            gradient.addColorStop(1, colors[1]);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, dom.previewCanvas.width, dom.previewCanvas.height);
            drawCanvasContent(ctx, dom.previewCanvas);
        }
    };

    dom.customizationOptions.addEventListener('click', (e) => {
        const target = e.target.closest('.selectable-option');
        if (target) {
            const parent = target.parentElement;
            if (parent.classList.contains('image-selector') || parent.id === 'gradient-selector') {
                document.querySelectorAll('.bg-selection').forEach(btn => btn.classList.remove('active'));
            } else if (parent.id === 'text-color-selector' || parent.id === 'text-align-selector') {
                parent.querySelectorAll('.selectable-option').forEach(btn => btn.classList.remove('active'));
            }
            target.classList.add('active');
            updatePreview();
        }
    });
    dom.uploadBgInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                uploadedImageUrl = event.target.result;
                dom.uploadedImagePreview.innerHTML = '';
                const previewBtn = document.createElement('button');
                previewBtn.type = 'button';
                previewBtn.classList.add('selectable-option', 'bg-selection', 'active'); // 直接設為 active
                previewBtn.dataset.type = 'uploaded';
                previewBtn.dataset.source = uploadedImageUrl;
                previewBtn.style.backgroundImage = `url(${uploadedImageUrl})`; // 3. 使用 backgroundImage
                dom.uploadedImagePreview.appendChild(previewBtn);
                document.querySelectorAll('.bg-selection').forEach(el => {
                    if (el !== previewBtn) el.classList.remove('active');
                });
                updatePreview();
            };
            reader.readAsDataURL(file);
        }
    });
    dom.playerNameInput.addEventListener('input', updatePreview);
    dom.showRangeToggle.addEventListener('change', updatePreview);

    dom.calculateBtn.addEventListener('click', () => {
        dom.resCurrent.textContent = '...'; dom.resTallest.textContent = '...'; dom.resShortest.textContent = '...';
        if (dom.resJson) dom.resJson.textContent = '';
        dom.resultActions.style.display = 'none';
        lastResult = null;
        dom.statusEl.innerHTML = t('status_calculating'); dom.statusEl.className = '';
        const rawData = dom.b64Input.value.trim();
        if (!rawData) {
            dom.statusEl.innerHTML = t('status_error_empty'); dom.statusEl.className = 'status-error';
            return;
        }

        const results = decodeAndCalculate(rawData);

        if (results.error) {
            dom.statusEl.innerHTML = results.error; dom.statusEl.className = 'status-error';
            dom.simulatorContainer.style.display = 'none';
        } else {
            lastResult = results;
            animateValue(dom.resCurrent, parseFloat(dom.resCurrent.textContent) || 0, results.current, 500);
            animateValue(dom.resTallest, parseFloat(dom.resTallest.textContent) || 0, results.tallest, 500);
            animateValue(dom.resShortest, parseFloat(dom.resShortest.textContent) || 0, results.shortest, 500);

            if (dom.resJson && results.json) {
                dom.resJson.textContent = JSON.stringify(results.json, null, 2);
            }

            dom.statusEl.innerHTML = t('status_success'); dom.statusEl.className = 'status-success';
            dom.resultActions.style.display = 'block';

            lastCalculatedScale = results.scale;
            dom.simulatorContainer.style.display = 'block';
            dom.resetSimBtn.click();
            history.unshift(results);
            if (history.length > 10) history.pop();
            saveHistory();
            renderHistory();
            dom.historyContainer.style.display = 'block';
            setTimeout(updatePreview, 100);
        }
    });

    dom.copyBtn.addEventListener('click', () => {
        if (!lastResult) {
            dom.statusEl.innerHTML = t('status_copy_empty');
            dom.statusEl.className = 'status-error';
            return;
        }
        const copyText = `${t('res_current')} ${lastResult.current.toFixed(4)}\n${t('res_tallest')} ${lastResult.tallest.toFixed(4)}\n${t('res_shortest')} ${lastResult.shortest.toFixed(4)}`;
        navigator.clipboard.writeText(copyText).then(() => {
            dom.statusEl.innerHTML = t('status_copy_success'); dom.statusEl.className = 'status-success';
            const originalText = t('copy_btn');
            dom.copyBtn.textContent = t('copy_btn_copied');
            setTimeout(() => { dom.copyBtn.textContent = originalText; }, 2000);
        }).catch(err => {
            dom.statusEl.innerHTML = t('status_copy_fail'); dom.statusEl.className = 'status-error';
        });
    });

    dom.imageBtn.addEventListener('click', () => {
        if (!lastResult) return;

        const downloadCanvas = document.createElement('canvas');
        downloadCanvas.width = 500; downloadCanvas.height = 250;
        const ctx = downloadCanvas.getContext('2d');
        const activeBg = document.querySelector('.bg-selection.active');
        const triggerDownload = () => {
            const now = new Date();
            const pad = (num) => num.toString().padStart(2, '0');
            const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
            const link = document.createElement('a');
            link.download = `sky-height-card_${timestamp}.png`;
            link.href = downloadCanvas.toDataURL('image/png');
            link.click();
        };

        if (activeBg && (activeBg.dataset.type === 'image' || activeBg.dataset.type === 'uploaded')) {
            const bgImage = new Image();
            bgImage.crossOrigin = "Anonymous";
            bgImage.src = activeBg.dataset.source;
            bgImage.onload = () => {
                ctx.drawImage(bgImage, 0, 0, downloadCanvas.width, downloadCanvas.height);
                ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
                ctx.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height);
                drawCanvasContent(ctx, downloadCanvas);
                triggerDownload();
            };
            bgImage.onerror = () => { alert('背景圖片載入失敗！'); };
        } else if (activeBg && activeBg.dataset.type === 'gradient') {
            const colors = activeBg.dataset.colors.split(',');
            const gradient = ctx.createLinearGradient(0, 0, downloadCanvas.width, downloadCanvas.height);
            gradient.addColorStop(0, colors[0]);
            gradient.addColorStop(1, colors[1]);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height);
            drawCanvasContent(ctx, downloadCanvas);
            triggerDownload();
        } else {
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--details-bg');
            ctx.fillRect(0, 0, downloadCanvas.width, downloadCanvas.height);
            drawCanvasContent(ctx, downloadCanvas);
            triggerDownload();
        }
    });

    dom.drinkPotionBtn.addEventListener('click', () => {
        if (lastCalculatedScale === null) {
            alert(t('sim_error_no_calc'));
            return;
        }
        dom.potionExtremeNotice.textContent = '';
        const newRandomHeight = Math.random() * 4.0 - 2.0;
        const newHeightNumber = 7.6 - (8.3 * lastCalculatedScale) - (3 * newRandomHeight);

        const currentResult = parseFloat(dom.potionResult.textContent) || newHeightNumber;
        animateValue(dom.potionResult, currentResult, newHeightNumber, 300);
        if (newRandomHeight >= 1.96) {
            dom.potionExtremeNotice.textContent = t('sim_extreme_tall');
        } else if (newRandomHeight <= -1.96) {
            dom.potionExtremeNotice.textContent = t('sim_extreme_short');
        }

        potionCounter++;
        dom.potionCount.textContent = potionCounter;
    });

    dom.resetSimBtn.addEventListener('click', () => {
        potionCounter = 0;
        dom.potionResult.textContent = '...';
        dom.potionCount.textContent = '0';
        dom.potionExtremeNotice.textContent = '';
    });

    function handleQrUpload(file) {
        if (!file || !file.type.startsWith('image/')) {
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            dom.statusEl.innerHTML = t('status_qr_reading');
            dom.statusEl.className = '';
            const image = new Image();
            image.onload = () => {
                dom.statusEl.innerHTML = t('status_qr_scanning');
                const canvas = dom.qrCanvas;
                const ctx = canvas.getContext('2d');
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0, image.width, image.height);
                const imageData = ctx.getImageData(0, 0, image.width, image.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height, {
                    inversionAttempts: "dontInvert",
                });
                if (code) {
                    dom.statusEl.innerHTML = t('status_qr_success');
                    dom.statusEl.className = 'status-success';
                    dom.b64Input.value = code.data;
                    dom.calculateBtn.click();
                } else {
                    dom.statusEl.innerHTML = t('status_qr_fail');
                    dom.statusEl.className = 'status-error';
                }
            };
            image.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    dom.qrUploadArea.addEventListener('click', () => dom.qrFileInput.click());
    dom.qrFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
            handleQrUpload(e.target.files[0]);
        }
    });

    dom.qrUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dom.qrUploadArea.classList.add('dragover');
    });

    dom.qrUploadArea.addEventListener('draleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dom.qrUploadArea.classList.remove('dragover');
    });

    dom.qrUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dom.qrUploadArea.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleQrUpload(e.dataTransfer.files[0]);
            e.dataTransfer.clearData();
        }
    });

    populateBgSelectors();
    loadHistory();
    setLanguage(currentLang);
    updatePreview();
});
