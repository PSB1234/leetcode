# Last updated: 16/7/2026, 9:18:44 pm
class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [0] * (amount+1)
        dp[0] = 1
        for coin in coins:
            for i in range(len(dp)):
                dp[i] += dp[i - coin] if i-coin >=0 else 0
        return dp[-1]