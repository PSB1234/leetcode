# Last updated: 16/7/2026, 9:16:19 pm
class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        leftPrefix: List[int] = []
        rightPrefix: List[int] = []
        ans: List[int] = []
        count1 = 0
        for i in nums:
            leftPrefix.append(count1)
            count1 += i
        count2 = 0
        for j in nums[::-1]:
            rightPrefix.append(count2)
            count2 += j 
        rightPrefix =  rightPrefix [::-1]  
        for k in range(len(nums)):
            ans.append( abs(leftPrefix[k] - rightPrefix[k]) )
        return ans