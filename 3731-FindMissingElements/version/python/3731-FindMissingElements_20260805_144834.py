# Last updated: 5/8/2026, 2:48:34 pm
1class Solution:
2    def findMissingElements(self, nums: List[int]) -> List[int]:
3        mn = 10000
4        mx = -1
5        num = [False]*101
6        ans = []
7        for i in range(len(nums)):
8            mn = min(mn,nums[i])
9            mx = max(mx,nums[i])
10        for i in range(len(nums)):
11            num[nums[i]] = True
12        for i in range(mn,mx+1):
13            if num[i] == False:
14                ans.append(i)
15        return ans
16
17
18