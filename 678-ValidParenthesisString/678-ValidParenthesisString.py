# Last updated: 16/7/2026, 9:18:34 pm
class Solution:
    def checkValidString(self, s: str) -> bool:
        leftmin = 0 
        leftmax = 0
        for p in s:
            if p == "(":
                leftmin,leftmax = leftmin + 1,leftmax + 1
            if p == ")":
                leftmin,leftmax = leftmin - 1,leftmax - 1
            if p == "*":
                leftmin,leftmax = leftmin - 1,leftmax + 1
            if(leftmin<0):
                leftmin = 0
            if(leftmax<0):
                return False
        return leftmin == 0
            








            
        