# Last updated: 16/7/2026, 9:15:44 pm
class Solution:
    def gcdOfOddEvenSums(self, n: int) -> int:
        def GCD(a:int,b:int)->int:
            return a if b==0 else GCD(b,a%b)
        sumOdd =  n**2
        sumEven = n*(n+1)
        return GCD(sumOdd,sumEven)
