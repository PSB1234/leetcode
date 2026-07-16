# Last updated: 16/7/2026, 9:17:05 pm
class Solution(object):
    def getConcatenation(self, nums):
        ans = []
        n = len(nums)
        ans = nums[0:n] + nums[0:n]
        return ans
        