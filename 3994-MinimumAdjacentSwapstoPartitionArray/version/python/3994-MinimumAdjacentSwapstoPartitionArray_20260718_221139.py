# Last updated: 18/7/2026, 10:11:39 pm
# very tricky problem
1class Solution:
2    def minAdjacentSwaps(self, nums: list[int], a: int, b: int) -> int:
3        Mod = 10**9 + 7
4        middle = 0
5        high = 0
6        swap = 0
7        for num in nums:
8            if num < a:
9                swap += middle + high
10            elif num <= b and num >= a:
11                swap += high
12                middle+=1
13            else:
14                high+=1
15        return swap%Mod