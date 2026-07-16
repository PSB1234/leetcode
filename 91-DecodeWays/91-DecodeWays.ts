// Last updated: 16/7/2026, 9:20:57 pm
function numDecodings(s: string): number {
    const dp: Array<number> = Array.from({ length: s.length + 1 }, () => 1);
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') {
            dp[i] = 0;
        } else {
            dp[i] = dp[i + 1];
        }
        if (i + 1 < s.length && (s[i] === '1' || (s[i] === '2' && ('0123456'.includes(s[i + 1]))))) {
            dp[i] += dp[i + 2];
        }
    }
    return dp[0];
};
