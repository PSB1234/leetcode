/*
 * @lc app=leetcode id=3147 lang=typescript
 *
 * [3147] Taking Maximum Energy From the Mystic Dungeon
 */

// @lc code=start
function maximumEnergy(energy: number[], k: number): number {
    const n = energy.length;
    const dp = Array(n).fill(0);
    let ans = -Infinity;

    for (let i = n - 1; i >= 0; i--) {
        dp[i] = energy[i];
        if (i + k < n) dp[i] += dp[i + k];
        ans = Math.max(ans, dp[i]);
    }

    return ans;


}


// @lc code=end

