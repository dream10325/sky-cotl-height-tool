function calculateStats(height, scale) {
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
}

function decodeAndCalculate(rawData) {
    const debugLog = (msg) => { console.log(`[SkyTool Debug] ${msg}`); };

    try {
        debugLog("開始解析……");

        const startMarker = "ImJvZHki";
        const startIndex = rawData.indexOf(startMarker);

        if (startIndex !== -1) {
            let b64Str = rawData.substring(startIndex);
            b64Str = b64Str.replace(/-/g, '+').replace(/_/g, '/');
            const padding = b64Str.length % 4;
            if (padding) b64Str += '='.repeat(4 - padding);

            const decodedText = atob(b64Str);

            let height;
            const heightKeyMatch = decodedText.match(/eigh/i);
            if (!heightKeyMatch) return { error: 'status_error_general' };
            const heightMatch = decodedText.substring(heightKeyMatch.index).match(/(-?\d*\.\d+|-?\d+\.?\d*)/);
            if (heightMatch) height = parseFloat(heightMatch[1]);
            else return { error: 'status_error_general' };

            let scale;
            const scaleKeyMatch = decodedText.match(/scale/i);
            if (!scaleKeyMatch) return { error: 'status_error_general' };

            const scaleSub = decodedText.substring(scaleKeyMatch.index + scaleKeyMatch[0].length);
            const numPattern = /(-?\d+\.?\d*(?:[eE][-+]?\d+)?)/g;
            let m;
            while ((m = numPattern.exec(scaleSub)) !== null) {
                const val = parseFloat(m[1]);
                if (m[1].includes('.') || m[1].toLowerCase().includes('e')) {
                    scale = val; break;
                } else if (Math.abs(val) >= 1000) {
                    scale = val / 1000000000.0; break;
                }
            }
            if (scale === undefined) return { error: 'status_error_general' };

            return calculateStats(height, scale);
        }

        let b64Str = rawData;
        const oIndex = b64Str.indexOf("o=");
        if (oIndex !== -1) {
            b64Str = b64Str.substring(oIndex + 2);
        }

        b64Str = b64Str.replace(/-/g, '+').replace(/_/g, '/');
        const padding = b64Str.length % 4;
        if (padding) {
            b64Str += '='.repeat(4 - padding);
        }

        let decodedText;
        try {
            decodedText = atob(b64Str);
            debugLog(`解碼後文本: ${decodedText}`);
        } catch (e) {
            debugLog("Base64 解碼失敗");
            return { error: 'status_error_general' };
        }

        let height = null;
        let scale = null;

        const sAnchorMatch = decodedText.match(/["']s/i);

        if (sAnchorMatch) {
            const anchorIndex = sAnchorMatch.index;
            debugLog(`在索引 ${anchorIndex} 處找到錨點 "s"`);

            const afterS = decodedText.substring(anchorIndex + sAnchorMatch[0].length);
            const scaleCandidates = afterS.match(/(-?\d+\.?\d*(?:[eE][-+]?\d+)?)/g) || [];

            for (const cand of scaleCandidates) {
                const val = parseFloat(cand);
                if (cand.includes('.') || cand.toLowerCase().includes('e')) {
                    scale = val;
                    debugLog(`錨點體型值 (浮點數): ${scale}`);
                    break;
                } else if (Math.abs(val) >= 1000) {
                    scale = val / 1000000000.0;
                    debugLog(`錨點體型值 (大整數): ${val} -> ${scale}`);
                    break;
                }
            }

            const beforeS = decodedText.substring(0, anchorIndex);
            const floatMatches = [...beforeS.matchAll(/(-?\d+\.\d+(?:[eE][-+]?\d+)?)/g)];

            if (floatMatches.length > 0) {
                height = parseFloat(floatMatches[floatMatches.length - 1][1]);
                debugLog(`錨點身高 (最後一個浮點數): ${height}`);
            } else {
                const anyNumMatches = [...beforeS.matchAll(/(-?\d+(?:\.\d+)?)/g)];
                if (anyNumMatches.length > 0) {
                    height = parseFloat(anyNumMatches[anyNumMatches.length - 1][1]);
                    debugLog(`錨點身高 (最後一個數字): ${height}`);
                }
            }
        }

        if (scale === null) {
            debugLog("體型值的錨點策略失敗，嘗試備用搜尋……");
            const sKeyMatch = decodedText.match(/["']?s["']?\s*:/i);
            if (sKeyMatch) {
                const sub = decodedText.substring(sKeyMatch.index + sKeyMatch[0].length);
                const m = sub.match(/[^\d-]*(-?\d+\.?\d*(?:[eE][-+]?\d+)?)/);
                if (m) {
                    let val = parseFloat(m[1]);
                    if (Math.abs(val) >= 1000) scale = val / 1000000000.0;
                    else scale = val;
                }
            }
        }

        if (height === null) {
            debugLog("身高的錨點策略失敗，嘗試備用搜尋……");
            const hKeyMatch = decodedText.match(/["']?h["']?\s*:/i);
            if (hKeyMatch) {
                const sub = decodedText.substring(hKeyMatch.index + hKeyMatch[0].length);
                const m = sub.match(/[^\d-]*(-?\d+\.?\d*(?:[eE][-+]?\d+)?)/);
                if (m) height = parseFloat(m[1]);
            } else {
                const startMatch = decodedText.match(/^(-?\d+\.?\d*(?:[eE][-+]?\d+)?)/);
                if (startMatch) height = parseFloat(startMatch[1]);
            }
        }

        if (height !== null && scale !== null) {
            return calculateStats(height, scale);
        }

        debugLog("最終解析數值失敗。");
        return { error: 'status_error_general' };

    } catch (e) {
        console.error(e);
        return { error: 'status_error_general' };
    }
}