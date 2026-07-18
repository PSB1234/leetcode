# Last updated: 18/7/2026, 8:59:56 pm
1class Solution:
2    def maximumValue(self, n: int, s: int, m: int) -> int:
3        peaks = n // 2
4        if peaks == 0:
5            return s
6        return s + peaks * m - (peaks - 1)
7        