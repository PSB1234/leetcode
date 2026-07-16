# Last updated: 16/7/2026, 9:19:21 pm
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        total = (n*(n+1))//2
        notTotal = 0
        for num in nums:
            notTotal+=num
        return total-notTotal
