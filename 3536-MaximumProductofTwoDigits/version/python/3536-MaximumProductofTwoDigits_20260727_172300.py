# Last updated: 27/7/2026, 5:23:00 pm
1class Solution:
2    def maxProduct(self, nums: List[int]) -> int:
3        max1 = float('-inf')
4        max2 = float('-inf')
5        for num in nums:
6            if num>max1:
7                max2=max1
8                max1=num
9            elif num>max2:
10                max2=num
11        return (max1-1) * (max2-1)
12        