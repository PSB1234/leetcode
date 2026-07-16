// Last updated: 16/7/2026, 9:18:48 pm
function characterReplacement(s: string, k: number): number {
    const alphabet = Array.from({ length: 26 }, () => 0);
    let i = 0;
    let maxFreq = 0;
    let maxLen = 0;
    for (let j = 0; j < s.length; j++) {
        const idx = s[j].charCodeAt(0) - 65;
        alphabet[idx]++;
        maxFreq = Math.max(maxFreq, alphabet[idx]);
        while (j - i + 1 - maxFreq > k) {
            alphabet[s[i].charCodeAt(0) - 65]--;
            i++;
        }
        maxLen = Math.max(maxLen, j - i + 1);
    }

    return maxLen;
};