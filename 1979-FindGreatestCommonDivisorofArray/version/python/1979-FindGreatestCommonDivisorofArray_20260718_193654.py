# Last updated: 18/7/2026, 7:36:54 pm
1class Solution:
2    def findGCD(self, nums: List[int]) -> int:
3        mx = max(nums)
4        mn = min(nums)
5        def gcd(a:int,b:int)->int:
6            return a if b == 0 else gcd(b,a%b)
7        return gcd(mn,mx)
8        