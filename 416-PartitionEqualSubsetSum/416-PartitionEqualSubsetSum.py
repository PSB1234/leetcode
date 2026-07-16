# Last updated: 16/7/2026, 9:18:51 pm
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums)
        if total % 2:
            return False
        target = total//2
        store  =  set()
        store.add(0)
        for i in range(len(nums)-1,-1,-1):
            newStore = set()
            for num in store:
                newStore.add(num)
                newStore.add(num + nums[i])
            store =newStore
        return True if target in store else False