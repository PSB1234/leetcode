# Last updated: 16/7/2026, 9:16:47 pm
class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        left:List[int] = []
        right:List[int] = []
        middle:List[int] = []
        for num in nums:
            if num<pivot:
                left.append(num)
            elif num>pivot:
                right.append(num)
            else:
                middle.append(num)
        return left+middle+right