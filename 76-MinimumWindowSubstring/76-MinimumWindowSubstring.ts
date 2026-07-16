// Last updated: 16/7/2026, 9:21:11 pm
function minWindow(s: string, t: string): string {
    if (s.length < t.length) return '';
    const tmap: Map<string, number> = new Map();
    const check: Map<string, number> = new Map();
    for (const item of t) {
        tmap.set(item, (tmap.get(item) || 0) + 1);
        check.set(item, 0);
    }
    let minlen = Infinity;
    const isLen = tmap.size;
    let hasLen = 0, i = 0;
    let start = 0;
    for (let j = 0; j < s.length; j++) {
        const character = s[j];
        if (tmap.has(character)) {
            check.set(character, check.get(character)! + 1);
            if (tmap.get(character)! === check.get(character)!) {
                hasLen++;
            }
            while (hasLen === isLen) {
                if (j - i + 1 < minlen) {
                    minlen = j - i + 1;
                    start = i;
                }
                const leftChar = s[i];
                if (tmap.has(leftChar)) {
                    check.set(leftChar, check.get(leftChar)! - 1);
                    if (check.get(leftChar)! < tmap.get(leftChar)!) {
                        hasLen--;
                    }
                }
                i++;


            }
        }

    }


    return minlen === Infinity ? "" : s.substring(start, start + minlen);
};