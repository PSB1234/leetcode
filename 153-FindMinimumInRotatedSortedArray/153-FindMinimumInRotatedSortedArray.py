# Last updated: 16/7/2026, 9:20:14 pm
class Solution:
    def findMin(self, nums: List[int]) -> int:
        low = 0
        high = len(nums)-1
        while(low<high):
            middle = low + (high-low)//2
            if(nums[low]<nums[high]):
                return nums[low]
            if(nums[low]<=nums[middle]):
                low = middle+1
            else:
                high = middle
        return nums[low]

        