// Last updated: 16/7/2026, 9:20:28 pm
function wordBreak(s: string, wordDict: string[]): boolean {
    const dp: boolean[] = new Array(s.length + 1).fill(false);
    dp[dp.length - 1] = true;
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = 0; j < wordDict.length; j++) {
            if (wordDict[j].length + i <= dp.length && s.substring(i, i + wordDict[j].length) === wordDict[j] && !dp[i]) {
                dp[i] = dp[i + wordDict[j].length];
            }
        }
    }
    return dp[0];
};
wordBreak("abcd",
    ["a", "abc", "b", "cd"])