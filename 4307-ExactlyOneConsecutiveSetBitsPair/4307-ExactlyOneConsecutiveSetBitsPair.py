# Last updated: 16/7/2026, 9:15:33 pm
class Solution:
    def consecutiveSetBits(self, n: int) -> bool:
        a = str(bin(n))[2:]
        count = 0
        for i in range(1,len(a)):
           if a[i-1] == a[i] and a[i] == '1':
               count+=1
        return count == 1 