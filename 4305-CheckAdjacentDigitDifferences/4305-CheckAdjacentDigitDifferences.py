# Last updated: 16/7/2026, 9:15:34 pm
class Solution:
    def isAdjacentDiffAtMostTwo(self, s: str) -> bool:
        for i in range(len(s)-1):
            if(abs(int(s[i+1])-int(s[i]))>2):
                return False
        return True