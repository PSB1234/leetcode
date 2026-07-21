# Last updated: 21/7/2026, 11:31:06 pm
1class Solution:
2    def maxActiveSectionsAfterTrade(self, s: str) -> int:
3        ones = s.count('1')
4
5        s = '1' + s + '1'
6
7        n = len(s)
8        i = 0
9
10        ans = ones
11
12        # Skip first 1's
13        while i < n and s[i] == '1':
14            i += 1
15
16        # Read first 0-block
17        c10 = 0
18        while i < n and s[i] == '0':
19            c10 += 1
20            i += 1
21
22        while i < n:
23            c11 = 0
24            while i < n and s[i] == '1':
25                c11 += 1
26                i += 1
27
28            if c11 == 0:
29                break
30            c20 = 0
31            while i < n and s[i] == '0':
32                c20 += 1
33                i += 1
34
35            if c20 == 0:
36                break
37
38            ans = max(ans, ones + c10 + c20)
39            c10 = c20
40
41        return ans