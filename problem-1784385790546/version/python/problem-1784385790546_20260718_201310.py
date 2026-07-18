# Last updated: 18/7/2026, 8:13:10 pm
1class Solution:
2    def rearrangeString(self, s: str, x: str, y: str) -> str:
3        mp: Dict[str, int] = {}
4
5        for char in s:
6            mp[char] = mp.get(char, 0) + 1
7
8        ans = ""
9
10        while mp.get(y, 0) > 0:
11            ans += y
12            mp[y] -= 1
13
14        for char, count in mp.items():
15            if char != x:
16                ans += char * count
17
18        while mp.get(x, 0) > 0:
19            ans += x
20            mp[x] -= 1
21
22        return ans
23        