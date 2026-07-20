# Last updated: 20/7/2026, 9:52:03 pm
# super tricky soln
1class Solution:
2    def maxProfit(self, prices: List[int]) -> int:
3        dif = []
4        for i in range(1,len(prices)):
5            dif.append(prices[i]-prices[i-1])
6        ans = 0
7        for j in range(len(dif)):
8            if dif[j]>0:
9                ans += dif[j]
10        return ans
11
12        