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
    try {
        const startMarker = "ImJvZHki";
        const startIndex = rawData.indexOf(startMarker);

        if (startIndex !== -1) {
            let b64Str = rawData.substring(startIndex);
            b64Str = b64Str.replace(/-/g, '+').replace(/_/g, '/');
            const padding = b64Str.length % 4;
            if (padding) {
                b64Str += '='.repeat(4 - padding);
            }

            const decodedText = atob(b64Str);

            let height;
            const heightKeyMatch = decodedText.match(/eigh/i);
            if (!heightKeyMatch) return { error: 'status_error_general' };

            const heightSearchArea = decodedText.substring(heightKeyMatch.index + heightKeyMatch[0].length);
            const heightMatch = heightSearchArea.match(/(-?\d*\.\d+|-?\d+\.?\d*)/);
            if (heightMatch) {
                height = parseFloat(heightMatch[1]);
            } else {
                return { error: 'status_error_general' };
            }

            let scale;
            const scaleKeyMatch = decodedText.match(/scale/i);
            if (!scaleKeyMatch) return { error: 'status_error_general' };

            const scaleSearchArea = decodedText.substring(scaleKeyMatch.index + scaleKeyMatch[0].length);
            const scientificMatch = scaleSearchArea.match(/[":]*(-?\d+\.?\d*)[eE]([-+]?\d+)/);

            if (scientificMatch) {
                const base = parseFloat(scientificMatch[1]);
                const exponent = parseInt(scientificMatch[2]);
                scale = base * Math.pow(10, exponent);
            } else {
                const standardFloatMatch = scaleSearchArea.match(/[":]*(-?\d*\.\d+)/);
                if (standardFloatMatch) {
                    scale = parseFloat(standardFloatMatch[1]);
                } else {
                    const searchWindow = scaleSearchArea.substring(0, 30);
                    const integerMatch = searchWindow.match(/^.*?(\d{1,10})/);
                    if (integerMatch) {
                        const scaleInt = parseInt(integerMatch[1]);
                        scale = scaleInt / 1000000000.0;
                    } else {
                        return { error: 'status_error_general' };
                    }
                }
            }

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
        } catch (e) {
            return { error: 'status_error_general' };
        }

        const pattern = /(-?\d+(?:\.\d+)?(?:[eE][-+]?\d+)?),"s":(-?\d+(?:\.\d+)?(?:[eE][-+]?\d+)?)/;
        const match = decodedText.match(pattern);

        if (match) {
            const height = parseFloat(match[1]);
            const scale = parseFloat(match[2]);
            return calculateStats(height, scale);
        }

        return { error: 'status_error_general' };

    } catch (e) {
        console.error(e);
        return { error: 'status_error_general' };
    }
}