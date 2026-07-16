# Last updated: 16/7/2026, 9:15:31 pm
class Solution:
    def minimumSwaps(self, nums: list[int]) -> int:
        countOfZero = 0
        for num in nums:
            if num == 0 :
                countOfZero+=1
        for i in range(len(nums)-countOfZero,len(nums),1):
            if nums[i] == 0 :
                countOfZero-=1
        return countOfZero
        