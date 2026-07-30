# Last updated: 30/7/2026, 8:29:38 pm
1class Solution:
2    def minimumPushes(self, word: str) -> int:
3        count  = 0
4        ans = 0
5        inc = 1
6        for ch in word:
7            if count == 8:
8                count  = 0
9                inc+=1
10            ans+=inc
11            count+=1
12        return ans
13        