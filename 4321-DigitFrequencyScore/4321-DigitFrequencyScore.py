# Last updated: 16/7/2026, 9:15:36 pm
class Solution:
    def digitFrequencyScore(self, n: int) -> int:
        mapy:Dict[ int, int] = {}
        while(n>0):
            r = n%10
            if mapy.get(r):
                mapy[r] += 1
            else:
                mapy[r] = 1
            n = n//10
        ans:int  = 0
        for num,freq in mapy.items():
            ans += num*freq
        return ans
        