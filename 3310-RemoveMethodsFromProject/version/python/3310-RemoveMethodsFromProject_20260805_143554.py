# Last updated: 5/8/2026, 2:35:54 pm
1class Solution:
2    def remainingMethods(self, n: int, k: int, invocations: List[List[int]]) -> List[int]:
3      directedMap:Dict[int,[int]] = {}
4      corrupt:List[bool] = [False] * n
5      visited:List[bool] = [False] * n
6      for i in range(n):
7        directedMap[i] = []
8      for i,mp in enumerate(invocations):
9        frm = mp[0]
10        to = mp[1]
11        directedMap[frm].append(to)
12      def fillBool(index:int):
13        if index <0 or index>=n:
14          return
15        corrupt[index] = True
16        visited[index] = True
17        for i,ind in enumerate(directedMap[index]):  
18          if visited[ind] == False:
19            fillBool(ind)
20        return 
21      fillBool(k)
22      for u, v in invocations:
23        if not corrupt[u] and corrupt[v]:
24          return list(range(n))
25      return [i for i in range(n) if not corrupt[i]]