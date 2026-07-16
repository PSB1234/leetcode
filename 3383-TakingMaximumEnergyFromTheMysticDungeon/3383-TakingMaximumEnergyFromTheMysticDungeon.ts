// Last updated: 16/7/2026, 9:16:02 pm
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

