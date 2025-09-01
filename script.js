const translations = {
    'zh-Hant': {
        title: "光遇身高查看工具",
        toggle_instructions: "點此展開/收合使用教學",
        inst_1: "1. 在遊戲中，前往 <b>設定 > 帳號 > 帳號資訊 > 造型 QR code</b>。",
        inst_2: "2. 將該 QR Code 畫面<b>截圖</b>。（注意：這不是加好友的 QR Code！）",
        inst_3: "3. 接下來，您有兩種方式可以使用本工具：",
        inst_4: "<b>方法一 (推薦)：直接上傳截圖</b><br>回到本工具網頁，點擊「選擇圖片」按鈕，或直接將截圖檔案拖曳至上傳區域。工具會自動辨識並完成計算，無需複製貼上。",
        inst_5: "<b>方法二：貼上網址</b><br>使用另一部手機或網頁掃碼工具讀取你的截圖，掃描後會得到一串以 <code>https://sky.thatg.co/o=</code> 開頭的網址。<b>複製整個網址</b>並貼到本工具的輸入框，點擊計算即可。",
        faq_title: "常見問題",
        faq_q1: "Q: 網站無法計算身高？",
        faq_a1: "A: 可能因為我在更新網站，過個幾分鐘如果還是一樣請回報問題。",
        faq_q2: "Q: 要穿特定造型後才能計算身高嗎？",
        faq_a2: "A: 沒有這回事，如果無法使用可能是我正在更新網站。",
        faq_q3: "Q: 身高計算結果與以前不同？",
        faq_a3: "A: 因為新版修正了一個重大問題，現在的數值才是正確的。",
        input_label: "請在此貼上掃描到的完整網址：",
        placeholder: "將完整網址貼在這裡……",
        calculate_btn: "開始計算",
        res_current: "當前身高:",
        res_tallest: "最高身高:",
        res_shortest: "最低身高:",
        res_details: "詳細資訊 (debug用):",
        copy_btn: "複製結果",
        image_btn: "生成分享圖",
        status_calculating: "計算中……",
        status_error_empty: "錯誤：輸入框是空的。",
        status_error_general: "無法識別您貼上的內容。<br>請檢查看看：<ul><li>是不是貼錯了？</li><li>是不是沒有複製完整？</li></ul>",
        status_success: "計算完成！",
        status_copy_success: "身高結果已複製到剪貼簿！",
        status_copy_fail: "複製失敗，您的瀏覽器可能不支援。",
        copy_btn_copied: "已複製！",
        history_title: "歷史紀錄",
        clear_history_btn: "清空紀錄",
        history_current_label: "身高",
        history_note_placeholder: "點此新增備註...",
        customize_image: "自訂並生成分享圖",
        player_name: "玩家名稱 (選填):",
        player_name_placeholder: "在圖片上顯示你的名字",
        bg_style_upload: "上傳我的圖片:",
        bg_style_image: "內建圖片背景:",
        bg_style_gradient: "純色背景:",
        text_color: "文字顏色:",
        text_white: "淺色",
        text_black: "深色",
        confirm_clear_history: "您確定要清空所有歷史紀錄嗎？",
        confirm_delete_item: "您確定要刪除這條紀錄嗎？",
        item_deleted: "紀錄已刪除。",
        github_link: "GitHub",
        report_issue_link: "問題回報",
        text_align: "文字對齊:",
        align_center: "置中",
        align_left: "靠左",
        align_right: "靠右",
        show_range: "顯示身高範圍:",
        disclaimer_free: "此工具永久免費且開放原始碼，計算結果僅供參考。",
        disclaimer_privacy: "所有計算均在您的瀏覽器中完成，QR Code 資訊不會被上傳或儲存至任何伺服器。",
        sim_title: "重塑藥水模擬器",
        sim_desc: "先用上方工具算出您目前的身高後，再點擊按鈕來模擬使用重塑藥水後的身高。",
        sim_disclaimer_text: "本功能僅為娛樂用，不代表遊戲內實際機率。",
        sim_drink_btn: "喝一瓶重塑藥水！",
        sim_reset_btn: "重設",
        sim_meta_title: "玄學選項 (僅為趣味)",
        sim_meta_tall: "牽著高個子好友",
        sim_meta_short: "牽著矮個子好友",
        sim_result_label: "模擬新身高:",
        sim_count_label: "已使用藥水數量:",
        sim_error_no_calc: "請先使用上方的功能計算一次您目前的身高，才能開始模擬。",
        sim_extreme_tall: "（已達最高身高極限！）",
        sim_extreme_short: "（已達最矮身高極限！）",
        upload_instruction: "或拖曳、選擇含有 QR Code 的截圖",
        upload_btn: "選擇圖片",
        status_qr_reading: "正在讀取圖片...",
        status_qr_scanning: "正在掃描 QR Code...",
        status_qr_fail: "在圖片中找不到 QR Code。請確認截圖是否清晰且完整。",
        status_qr_success: "成功掃描 QR Code！正在計算..."
    },
    'en': {
        title: "Sky Height Tool",
        toggle_instructions: "Click to Expand/Collapse Instructions",
        inst_1: "1. In the game, go to <b>Settings > Account > Account Info > Outfit QR Code</b>.",
        inst_2: "2. <b>Take a screenshot</b> of the QR Code screen. (Note: This is NOT the friend QR code!)",
        inst_3: "3. You now have two ways to use this tool:",
        inst_4: "<b>Method 1 (Recommended): Upload the Screenshot</b><br>Return to this web tool and click \"Select Image\" or drag and drop your screenshot file into the upload area. The tool will automatically scan the image and calculate your height. No copy-pasting needed.",
        inst_5: "<b>Method 2: Paste the URL</b><br>Use another phone's camera or a web QR code scanner to read your screenshot. This will give you a URL that starts with <code>https://sky.thatg.co/o=</code>. <b>Copy the entire URL</b>, paste it into the tool's input box, and click calculate.",
        faq_title: "Frequently Asked Questions (FAQ)",
        faq_q1: "Q: The website isn't calculating my height.",
        faq_a1: "A: I might be updating the website. Please wait a few minutes. If the problem persists, please report the issue.",
        faq_q2: "Q: Do I need a specific outfit to calculate my height?",
        faq_a2: "A: Not at all. If it's not working, it's likely because I am in the middle of an update.",
        faq_q3: "Q: My height calculation is different than before.",
        faq_a3: "A: A major bug was fixed in the new version. The current values are the correct ones.",
        input_label: "Paste the full URL from the QR Code:",
        placeholder: "Paste the full URL here...",
        calculate_btn: "Calculate",
        res_current: "Current Height:",
        res_tallest: "Tallest Height:",
        res_shortest: "Shortest Height:",
        res_details: "Details (for debugging):",
        copy_btn: "Copy Results",
        image_btn: "Generate Image",
        status_calculating: "Calculating...",
        status_error_empty: "Error: Input box is empty.",
        status_error_general: "Couldn't recognize the content.<br>Please check if:<ul><li>You pasted the wrong text.</li><li>The text is incomplete.</li></ul>",
        status_success: "Calculation complete!",
        status_copy_success: "Results copied to clipboard!",
        status_copy_fail: "Copy failed. Your browser may not support this feature.",
        copy_btn_copied: "Copied!",
        history_title: "History",
        clear_history_btn: "Clear History",
        history_current_label: "Height",
        history_note_placeholder: "Click to add a note...",
        customize_image: "Customize & Generate Image",
        player_name: "Player Name (Optional):",
        player_name_placeholder: "Your name on the image",
        bg_style_upload: "Upload My Image:",
        bg_style_image: "Built-in Image Backgrounds:",
        bg_style_gradient: "Gradient Backgrounds:",
        text_color: "Text Color:",
        text_white: "Light",
        text_black: "Dark",
        confirm_clear_history: "Are you sure you want to clear all history?",
        confirm_delete_item: "Are you sure you want to delete this record?",
        item_deleted: "Record deleted.",
        github_link: "GitHub",
        report_issue_link: "Report an Issue (Chinese Only)",
        text_align: "Text Alignment:",
        align_center: "Center",
        align_left: "Left",
        align_right: "Right",
        show_range: "Show Height Range:",
        disclaimer_free: "This tool is free, open source, and the results are for reference only.",
        disclaimer_privacy: "All calculations are done in your browser. Your QR code data is not uploaded or stored.",
        sim_title: "Resize Potion Simulator",
        sim_desc: "First, calculate your current height above, then click the button to simulate your new random height after using a Resize Potion.",
        sim_disclaimer_text: "This feature is for entertainment purposes only and does not represent actual in-game probabilities.",
        sim_drink_btn: "Drink a Resize Potion!",
        sim_reset_btn: "Reset",
        sim_meta_title: "Metaphysics Options (For fun only)",
        sim_meta_tall: "Holding hands with a tall friend",
        sim_meta_short: "Holding hands with a short friend",
        sim_result_label: "Simulated New Height:",
        sim_count_label: "Potions Used:",
        sim_error_no_calc: "Please calculate your current height using the main tool above before starting the simulation.",
        sim_extreme_tall: "(Reached max height limit!)",
        sim_extreme_short: "(Reached min height limit!)",
        upload_instruction: "Or drag & drop / select a screenshot with a QR Code",
        upload_btn: "Select Image",
        status_qr_reading: "Reading image...",
        status_qr_scanning: "Scanning for QR Code...",
        status_qr_fail: "No QR Code found in the image. Please ensure the screenshot is clear and complete.",
        status_qr_success: "QR Code scanned successfully! Calculating..."
    },
'ja': {
    title: "Sky 身長測定ツール",
    toggle_instructions: "使い方を開く/閉じる",
    inst_1: "1. ゲーム内で<b>設定 > アカウント > アカウント情報 > アバターQRコード</b>の順に進みます。",
    inst_2: "2. QRコード画面の<b>スクリーンショット</b>を撮ります。（注：フレンド追加用のQRコードではありません！）",
    inst_3: "3. このツールを利用するには、2つの方法があります：",
    inst_4: "<b>方法1（推奨）：スクリーンショットを直接アップロード</b><br>このページに戻り、「画像を選択」ボタンをクリックするか、スクリーンショットファイルをアップロードエリアにドラッグ＆ドロップしてください。ツールは自動的に画像を認識し、計算します。",
    inst_5: "<b>方法2：URLを貼り付け</b><br>別のスマートフォンやウェブQRコードスキャナーでスクリーンショットを読み取ります。<code>https://sky.thatg.co/o=</code>から始まるURLを取得し、<b>URL全体をコピー</b>して下の入力欄に貼り付けてください。",
    faq_title: "よくある質問（FAQ）",
    faq_q1: "Q: ウェブサイトで身長が計算できません。",
    faq_a1: "A: サイトを更新している可能性があります。数分間待っても解決しない場合は、不具合報告をお願いします。",
    faq_q2: "Q: 特定の格好じゃなければ身長が計算できませんか？",
    faq_a2: "A: そんなことはありません。利用できない場合、サイトを更新している可能性があります。",
    faq_q3: "Q: 身長の計算結果が以前と異なります。",
    faq_a3: "A: 新しいバージョンで重大なバグが修正されました。現在の数値が正しい値です。",
    input_label: "スキャンした完全なURLをここに貼り付けてください：",
    placeholder: "完全なURLをここに貼り付け…",
    calculate_btn: "計算開始",
    res_current: "現在の身長:",
    res_tallest: "最高身長:",
    res_shortest: "最低身長:",
    res_details: "詳細情報（デバッグ用）:",
    copy_btn: "結果をコピー",
    image_btn: "共有画像を生成",
    status_calculating: "計算中…",
    status_error_empty: "エラー：入力欄が空です。",
    status_error_general: "貼り付けられた内容を認識できませんでした。<br>以下を確認してください：<ul><li>間違った内容を貼り付けていませんか？</li><li>URLが途中で切れていませんか？</li></ul>",
    status_success: "計算が完了しました！",
    status_copy_success: "身長の結果をクリップボードにコピーしました！",
    status_copy_fail: "コピーに失敗しました。お使いのブラウザは対応していない可能性があります。",
    copy_btn_copied: "コピーしました！",
    history_title: "履歴",
    clear_history_btn: "履歴を消去",
    history_current_label: "身長",
    history_note_placeholder: "クリックしてメモを追加…",
    customize_image: "共有画像をカスタマイズ",
    player_name: "プレイヤー名（任意）:",
    player_name_placeholder: "画像に表示する名前",
    bg_style_upload: "自分の画像をアップロード:",
    bg_style_image: "内蔵の背景画像:",
    bg_style_gradient: "グラデーション背景:",
    text_color: "テキストの色:",
    text_white: "明るい色",
    text_black: "暗い色",
    confirm_clear_history: "本当にすべての履歴を消去しますか？",
    confirm_delete_item: "この記録を本当に削除しますか？",
    item_deleted: "記録を削除しました。",
    github_link: "GitHub",
    report_issue_link: "不具合報告 (中国語のみ)",
    text_align: "文字揃え:",
    align_center: "中央揃え",
    align_left: "左揃え",
    align_right: "右揃え",
    show_range: "身長範囲を表示:",
    disclaimer_free: "このツールは永久に無料でオープンソースです。計算結果は参考用です。",
    disclaimer_privacy: "すべての計算はブラウザ内で行われ、QRコード情報がサーバーにアップロード・保存されることはありません。",
    sim_title: "リサイズドリンクシミュレーター",
    sim_desc: "まず上のツールで現在の身長を計算し、その後ボタンをクリックしてリサイズドリンク使用後の身長をシミュレートします。",
    sim_disclaimer_text: "この機能は娯楽目的のものです。ゲーム内の実際の確率を示すものではありません。",
    sim_drink_btn: "リサイズドリンクを1本飲む！",
    sim_reset_btn: "リセット",
    sim_meta_title: "オカルト設定（お遊び用）",
    sim_meta_tall: "高身長のフレンドと手をつなぐ",
    sim_meta_short: "低身長のフレンドと手をつなぐ",
    sim_result_label: "シミュレートされた新しい身長:",
    sim_count_label: "使用したドリンク数:",
    sim_error_no_calc: "シミュレーションを開始する前に、まず上のツールで現在の身長を計算してください。",
    sim_extreme_tall: "（最高身長の上限に達しました！）",
    sim_extreme_short: "（最低身長の下限に達しました！）",
    upload_instruction: "またはQRコードを含むスクリーンショットをドラッグ＆ドロップ/選択",
    upload_btn: "画像を選択",
    status_qr_reading: "画像を読み込み中…",
    status_qr_scanning: "QRコードをスキャン中…",
    status_qr_fail: "画像内にQRコードが見つかりませんでした。スクリーンショットが鮮明で完全であることを確認してください。",
    status_qr_success: "QRコードのスキャンに成功しました！計算中…"
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
        if (translations[lang][key] !== undefined) {
            const translation = translations[lang][key];
            if (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') { el.placeholder = translation; }
            else if (key.startsWith('inst_') || key.startsWith('faq_') || key === 'status_error_general' || key === 'sim_desc' || key === 'sim_disclaimer_text') { el.innerHTML = translation; }
            else { el.textContent = translation; }
        }
    });
    document.querySelectorAll('.lang-option').forEach(span => {
        span.classList.toggle('active', span.dataset.lang === lang);
    });
}

function t(key) { return translations[currentLang][key] || key; }

// START: 這是從您最舊版移植過來、最可靠的計算函式
function decodeAndCalculate(rawData) {
    try {
        // 步驟 1: 清理並解碼 Base64
        const startMarker = "ImJvZHki";
        const startIndex = rawData.indexOf(startMarker);
        if (startIndex === -1) { return { error: t('status_error_general') }; }
        
        let b64Str = rawData.substring(startIndex);
        b64Str = b64Str.replace(/-/g, '+').replace(/_/g, '/');
        const padding = b64Str.length % 4;
        if (padding) { b64Str += '='.repeat(4 - padding); }
        
        const decodedText = atob(b64Str);

        // 步驟 2: 解析 height
        const heightKeyIndex = decodedText.search(/h?eigh/);
        if (heightKeyIndex === -1) { return { error: t('status_error_general') }; }
        const heightSearchArea = decodedText.substring(heightKeyIndex + 4);
        const heightMatch = heightSearchArea.match(/-?\d*\.\d+/);
        if (!heightMatch) { return { error: t('status_error_general') }; }
        const height = parseFloat(heightMatch[0]);

        // 步驟 3: 解析 scale (兼容浮點數與整數兩種格式)
        let scale;
        const scaleKeyIndex = decodedText.search(/scale/);
        if (scaleKeyIndex === -1) { return { error: t('status_error_general') }; }
        const scaleSearchArea = decodedText.substring(scaleKeyIndex + 5);
        
        // 優先嘗試匹配浮點數
        const scaleFloatMatch = scaleSearchArea.match(/-?\d*\.\d+/);
        if (scaleFloatMatch) {
            scale = parseFloat(scaleFloatMatch[0]);
        } else {
            // 如果找不到浮點數，再嘗試匹配整數並進行換算
            const scaleIntMatch = scaleSearchArea.match(/-?\d+/);
            if (scaleIntMatch) {
                scale = parseInt(scaleIntMatch[0], 10) / 1000000000.0;
            } else {
                return { error: t('status_error_general') };
            }
        }

        // 步驟 4: 計算身高
        const currentHeight = 7.6 - (8.3 * scale) - (3 * height);
        const shortestHeight = 7.6 - (8.3 * scale) - (3 * -2.0);
        const tallestHeight = 7.6 - (8.3 * scale) - (3 * 2.0);

        // 步驟 5: 準備要回傳的完整資料
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
            json: jsonResult // 將解析出的核心數值放入 json 物件中，以便 debug 顯示
        };
    } catch (e) {
        console.error("Calculation failed:", e);
        return { error: t('status_error_general') };
    }
}
// END: 移植的計算函式

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


