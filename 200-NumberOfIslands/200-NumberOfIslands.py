# Last updated: 16/7/2026, 9:19:57 pm
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        islands = 0
        maxCol =len(grid[0])
        maxRow = len(grid)
        def dfs(i:int,j:int):
            if i<0 or j<0 or i>=maxRow or j>=maxCol or grid[i][j]=='0':
                return
            grid[i][j] = '0'
            dfs(i+1,j)
            dfs(i,j+1)
            dfs(i-1,j)
            dfs(i,j-1)
             
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    islands+=1
                    dfs(i,j)
                    
        return islands