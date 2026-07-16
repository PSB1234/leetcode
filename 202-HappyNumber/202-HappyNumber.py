# Last updated: 16/7/2026, 9:19:54 pm


class Solution:
    def isHappy(self, n: int) -> bool:
        visit:set[int] = set()        
        def sumOfSquare(n:int)->int:
            ans = 0
            while n!=0:
                ans = ans + (n%10)**2
                n//=10
            return ans
        while n not in visit:
            visit.add(n)
            n=sumOfSquare(n)
            if n==1:
                return True
        return False
            