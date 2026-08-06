# Last updated: 6/8/2026, 12:53:54 pm
1class Solution:
2    def multiplyDigits(self,n: int)->int:
3        ans: int = 1
4        while (n > 0): 
5            ans *= n % 10
6            n = (n // 10)
7    
8        return ans
9
10    def smallestNumber(self, n: int, t: int) -> int:
11
12        while (n <= 100): 
13            if (self.multiplyDigits(n) % t == 0): 
14                return n
15            else: 
16                n+=1
17
18
19        return n
20