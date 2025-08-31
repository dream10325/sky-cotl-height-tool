const translations = {
    'zh-Hant': {
        title: "光遇身高查看工具", toggle_instructions: "點此展開/收合使用教學", inst_1: "1. 在遊戲中，點擊右上角齒輪進入設定，選擇「帳號」，再點選「帳號資訊」，最後點選「造型 QR code」。", inst_2: "（注意：這不是加好友的 QR Code！）", inst_3: "2. 掃描該 QR Code。", inst_4: "3. 掃描後會得到一串網址，例如：<br><code>https://sky.thatg.co/o=8RV7ImJv...</code>", inst_5: "<b>4. 請複製完整的網址</b>", inst_5_zh: "，然後直接貼到下方的輸入框中即可！", input_label: "請在此貼上掃描到的完整網址：", placeholder: "將完整網址貼在這裡……", calculate_btn: "開始計算", res_current: "當前身高:", res_tallest: "最高身高:", res_shortest: "最低身高:", copy_btn: "複製結果", image_btn: "生成分享圖", status_calculating: "計算中……", status_error_empty: "錯誤：輸入框是空的。", status_error_general: "無法識別您貼上的內容。<br>請檢查看看：<ul><li>是不是貼錯了？</li><li>是不是沒有複製完整？</li></ul>", status_success: "計算完成！", status_copy_success: "身高結果已複製到剪貼簿！", status_copy_fail: "複製失敗，您的瀏覽器可能不支援。", copy_btn_copied: "已複製！", history_title: "歷史紀錄", clear_history_btn: "清空紀錄", history_current_label: "身高", history_note_placeholder: "點此新增備註...", customize_image: "自訂並生成分享圖", player_name: "玩家名稱 (選填):", player_name_placeholder: "在圖片上顯示你的名字", bg_style_upload: "上傳我的圖片:", bg_style_image: "內建圖片背景:", bg_style_gradient: "純色背景:", text_color: "文字顏色:", text_white: "淺色", text_black: "深色", confirm_clear_history: "您確定要清空所有歷史紀錄嗎？", confirm_delete_item: "您確定要刪除這條紀錄嗎？", item_deleted: "紀錄已刪除。", github_link: "GitHub", text_align: "文字對齊:", align_center: "置中", align_left: "靠左", align_right: "靠右", show_range: "顯示身高範圍:", disclaimer_free: "此工具永久免費且開放原始碼。請注意其他地方的收費服務可能存在風險。", disclaimer_privacy: "所有計算均在您的瀏覽器中完成，QR Code 資訊不會被上傳或儲存至任何伺服器。", disclaimer_accuracy: "計算結果僅供參考。", disclaimer_unofficial: "此為玩家粉絲開發的工具，與 thatgamecompany 官方無關。", sim_title: "重塑藥水模擬器", sim_desc: "先用上方工具算出您目前的身高後，再點擊按鈕來模擬使用重塑藥水後的身高。", sim_drink_btn: "喝一瓶重塑藥水！", sim_reset_btn: "重設", sim_result_label: "模擬新身高:", sim_count_label: "已使用藥水數量:", sim_error_no_calc: "請先使用上方的功能計算一次您目前的身高，才能開始模擬。", sim_extreme_tall: "（已達最高身高極限！）", sim_extreme_short: "（已達最矮身高極限！）"
    },
    'en': {
        title: "Sky Height Tool", toggle_instructions: "Click to Expand/Collapse Instructions", inst_1: "1. In the game, go to Settings (top-right gear) > Account > Account Info > Outfit QR Code.", inst_2: "(Note: This is NOT the friend QR code!)", inst_3: "2. Scan the QR Code.", inst_4: "3. You will get a URL, for example:<br><code>https://sky.thatg.co/o=8RV7ImJv...</code>", inst_5: "<b>4. Copy the entire URL</b>", inst_5_zh: " and paste it into the input box below.", input_label: "Paste the full URL from the QR Code:", placeholder: "Paste the full URL here...", calculate_btn: "Calculate", res_current: "Current Height:", res_tallest: "Tallest Height:", res_shortest: "Shortest Height:", copy_btn: "Copy Results", image_btn: "Generate Image", status_calculating: "Calculating...", status_error_empty: "Error: Input box is empty.", status_error_general: "Couldn't recognize the content.<br>Please check if:<ul><li>You pasted the wrong text.</li><li>The text is incomplete.</li></ul>", status_success: "Calculation complete!", status_copy_success: "Results copied to clipboard!", status_copy_fail: "Copy failed. Your browser may not support this feature.", copy_btn_copied: "Copied!", history_title: "History", clear_history_btn: "Clear History", history_current_label: "Height", history_note_placeholder: "Click to add a note...", customize_image: "Customize & Generate Image", player_name: "Player Name (Optional):", player_name_placeholder: "Your name on the image", bg_style_upload: "Upload My Image:", bg_style_image: "Built-in Image Backgrounds:", bg_style_gradient: "Gradient Backgrounds:", text_color: "Text Color:", text_white: "Light", text_black: "Dark", confirm_clear_history: "Are you sure you want to clear all history?", confirm_delete_item: "Are you sure you want to delete this record?", item_deleted: "Record deleted.", github_link: "GitHub", text_align: "Text Alignment:", align_center: "Center", align_left: "Left", align_right: "Right", show_range: "Show Height Range:", disclaimer_free: "This tool is free & open source forever. Be cautious of similar tools that require payment.", disclaimer_privacy: "All calculations are done in your browser. Your QR code data is not uploaded or stored.", disclaimer_accuracy: "The results are for reference only.", disclaimer_unofficial: "This is a fan-made tool and is not officially affiliated with thatgamecompany.", sim_title: "Resize Potion Simulator", sim_desc: "First, calculate your current height above, then click the button to simulate your new random height after using a Resize Potion.", sim_drink_btn: "Drink a Resize Potion!", sim_reset_btn: "Reset", sim_result_label: "Simulated New Height:", sim_count_label: "Potions Used:", sim_error_no_calc: "Please calculate your current height using the main tool above before starting the simulation.", sim_extreme_tall: "(Reached max height limit!)", sim_extreme_short: "(Reached min height limit!)"
    }
};
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
        if (translations[lang][key]) {
            const translation = translations[lang][key];
            if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') { el.placeholder = translation; } 
            else if (key === 'inst_5_zh') { el.innerHTML = translation; } 
            else if (key.startsWith('inst_')) { el.innerHTML = translation; } 
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
        if (startIndex === -1) { return { error: t('status_error_general') }; }

        let b64Str = rawData.substring(startIndex);
        b64Str = b64Str.replace(/-/g, '+').replace(/_/g, '/');
        const padding = b64Str.length % 4;
        if (padding) { b64Str += '='.repeat(4 - padding); }

        const decodedText = atob(b64Str);

        const heightRegex = /h?eigh.*?(-?\d+\.\d+)/;
        const scaleRegex = /scale.*?(\d+\.\d+)/;

        const heightMatch = heightRegex.exec(decodedText);
        const scaleMatch = scaleRegex.exec(decodedText);

        if (!heightMatch || !scaleMatch) {  
            return { error: t('status_error_general') };  
        }

        const height = parseFloat(heightMatch[1]);
        const scale = parseFloat(scaleMatch[1]);

        const currentHeight = 7.6 - (8.3 * scale) - (3 * height);
        const shortestHeight = 7.6 - (8.3 * scale) - (3 * -2.0);
        const tallestHeight = 7.6 - (8.3 * scale) - (3 * 2.0);

        return {  
            current: currentHeight,  
            tallest: tallestHeight,  
            shortest: shortestHeight,  
            scale: scale,  
            timestamp: new Date().getTime(),  
            note: ""  
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
        resShortest: document.getElementById('res-shortest'), statusEl: document.getElementById('status'),
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
    };

    let history = [];
    let uploadedImageUrl = null;
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
            const li = document.createElement('li');
            const date = new Date(item.timestamp).toLocaleString();
            li.innerHTML = `
                <button class="delete-history-item" data-index="${index}" title="${t('confirm_delete_item')}">×</button>
                <div class="history-item-main">
                    <span class="history-value">${t('history_current_label')}: ${item.current.toFixed(4)}</span>
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
                if(history.length === 0){
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
            const imgEl = document.createElement('img');
            imgEl.src = img.path;
            imgEl.classList.add('selectable-option', 'bg-selection');
            imgEl.dataset.type = 'image';
            imgEl.dataset.source = img.path;
            if (index === 0) imgEl.classList.add('active'); 
            dom.bgSelector.appendChild(imgEl);
        });
        dom.gradientSelector.innerHTML = '';
        backgroundGradients.forEach((grad) => {
            const gradEl = document.createElement('div');
            gradEl.classList.add('selectable-option', 'bg-selection', 'gradient-option');
            gradEl.style.background = `linear-gradient(to bottom right, ${grad.colors[0]}, ${grad.colors[1]})`;
            gradEl.dataset.type = 'gradient';
            gradEl.dataset.colors = grad.colors.join(',');
            dom.gradientSelector.appendChild(gradEl);
        });
    }

    const drawCanvasContent = (ctx, canvas) => {
        const current = dom.resCurrent.textContent;
        if (current === '...' || !dom.resultActions.style.display || dom.resultActions.style.display === 'none') {
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--details-bg');
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            return;
        }

        const playerName = dom.playerNameInput.value;
        const textColor = document.querySelector('.text-color-option.active').dataset.color;
        const textAlign = document.querySelector('.text-align-option.active').dataset.align;
        const showRange = dom.showRangeToggle.checked;

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
        ctx.fillText(current, x, 95);
        
        if (showRange) {
            ctx.font = `20px ${baseFont}`;
            const rangeText = `${t('res_tallest')} ${dom.resTallest.textContent} | ${t('res_shortest')} ${dom.resShortest.textContent}`;
            ctx.fillText(rangeText, x, 180);
        }
        
        ctx.font = `12px "Arial", sans-serif`;
        ctx.globalAlpha = 0.8;
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
                dom.uploadedImagePreview.innerHTML = `<img src="${uploadedImageUrl}" class="selectable-option bg-selection" data-type="uploaded" data-source="${uploadedImageUrl}">`;
                document.querySelectorAll('.bg-selection').forEach(el => el.classList.remove('active'));
                const newImg = dom.uploadedImagePreview.querySelector('img');
                newImg.classList.add('active');
                updatePreview();
            };
            reader.readAsDataURL(file);
        }
    });

    dom.playerNameInput.addEventListener('input', updatePreview);
    dom.showRangeToggle.addEventListener('change', updatePreview);

    dom.calculateBtn.addEventListener('click', () => {
        dom.resCurrent.textContent = '...'; dom.resTallest.textContent = '...'; dom.resShortest.textContent = '...';
        dom.resultActions.style.display = 'none';
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
            animateValue(dom.resCurrent, 0, results.current, 500);
            animateValue(dom.resTallest, 0, results.tallest, 500);
            animateValue(dom.resShortest, 0, results.shortest, 500);
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

            setTimeout(updatePreview, 500);
        }
    });

    dom.copyBtn.addEventListener('click', () => {
        const current = dom.resCurrent.textContent;
        if (current === '...' || !dom.resultActions.style.display || dom.resultActions.style.display === 'none') { 
            dom.statusEl.innerHTML = t('status_copy_empty'); 
            dom.statusEl.className = 'status-error'; 
            return; 
        }
        const tallest = dom.resTallest.textContent; const shortest = dom.resShortest.textContent;
        const copyText = `${t('res_current')} ${current}\n${t('res_tallest')} ${tallest}\n${t('res_shortest')} ${shortest}`;
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
        const current = dom.resCurrent.textContent;
        if (current === '...') return;
        
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

    // --- Simulator Logic ---
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

    populateBgSelectors();
    loadHistory();
    setLanguage(currentLang);
    updatePreview(); 
});

