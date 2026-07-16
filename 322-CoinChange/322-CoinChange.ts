// Last updated: 16/7/2026, 9:19:12 pm
function coinChange(coins: number[], amount: number): number {
    const dp: number[] = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i < amount + 1; i++) {
        for (let coin of coins) {
            dp[i] = Math.min(dp[i], i - coin < 0 ? Infinity : 1 + dp[i - coin]);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};