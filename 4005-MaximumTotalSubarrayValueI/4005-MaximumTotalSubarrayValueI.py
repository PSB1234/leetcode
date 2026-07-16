# Last updated: 16/7/2026, 9:15:42 pm
class Solution:
    def maxTotalValue(self, nums: List[int], k: int) -> int:
        maxNum = max(nums)
        minNum = min(nums)
        return (maxNum-minNum)*k