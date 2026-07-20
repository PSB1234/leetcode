# Last updated: 20/7/2026, 12:24:20 pm
1class Solution:
2    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
3        m = len(grid)
4        n = len(grid[0])
5        for _ in range(k):
6            temp: List[List[int]] =[[0 for _ in range(n)] for _ in range(m)]
7            for i in range(m):
8                for j in range(n-1):
9                    temp[i][j + 1] = grid[i][j]
10            for i in range(m-1):
11                temp[i+1][0] = grid[i][n-1]
12            temp[0][0] = grid[m-1][n-1]
13            grid = temp
14        return grid
15             