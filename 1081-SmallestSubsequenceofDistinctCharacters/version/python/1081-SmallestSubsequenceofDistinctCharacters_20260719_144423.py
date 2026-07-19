# Last updated: 19/7/2026, 2:44:23 pm
1class Solution:
2    def smallestSubsequence(self, s: str) -> str:
3        seen = {}
4        freq = {}
5        for i in range(len(s)):
6            freq[s[i]] = freq.get(s[i],0) + 1 
7            seen[s[i]] = False
8        ms = []
9        for i in range(len(s)):
10            if seen[s[i]] == False:
11                while len(ms) != 0 and ord(ms[-1]) > ord(s[i]) and freq[ms[-1]]>0:
12                    seen[ms[-1]] = False
13                    ms.pop()
14                seen[s[i]] = True
15                ms.append(s[i])
16            freq[s[i]]-=1  
17        return "".join(ms)