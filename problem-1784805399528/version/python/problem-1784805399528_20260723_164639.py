# Last updated: 23/7/2026, 4:46:39 pm
1class Solution:
2    def uniqueXorTriplets(self, nums: List[int]) -> int:
3        n =len(nums)
4        if n<3:
5            return n
6        ans = 1
7        while ans<=n:
8            ans*=2
9        return ans
10