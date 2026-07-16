# Last updated: 16/7/2026, 9:16:12 pm
class Solution:
    def isGood(self, nums: List[int]) -> bool:
        maxy = max(nums)
        lengthOfNums = len(nums)
        if (lengthOfNums != maxy + 1): return False
        mapy: dict[int, int] = dict();
        for i in range(len(nums)):
            if (nums[i] > maxy): return False
            mapy[nums[i]] = mapy.get(nums[i], 0) + 1
            
        for key,value in mapy.items():
            if (key == maxy and value !=2): return False
            if(key != maxy and value !=1):return False
        return True