# Last updated: 16/7/2026, 9:17:55 pm
class Solution(object):
   def tribonacci(self, n):
        ans = [0,1,1]
        ansIndex = n

        while n+1 > len(ans):
                i = len(ans)-1
                ans.append(ans[i] + ans[i-1] + ans[i-2])
        return ans[n]