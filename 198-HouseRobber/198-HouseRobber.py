# Last updated: 16/7/2026, 9:19:59 pm
class Solution:
    def rob(self, nums: List[int]) -> int:
        ans:List[int] = []
        ans.append(0)
        ans.append(nums[0])
        for i in range(1,len(nums)):
            a = ans[i]
            b = nums[i] + ans[i-1]
            ans.append(max(a,b))
        return ans[-1] 
        