# Last updated: 16/7/2026, 9:19:58 pm
class Solution:
    def hammingWeight(self, n: int) -> int:
        res = ''
        count = 0
        while n > 0:
            if(str(n%2)=='1'):
                count+=1
            res = str(n%2) + res
            n//=2
        return count