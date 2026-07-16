// Last updated: 16/7/2026, 9:21:19 pm
class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
    vector<vector<int>> dyGrid(grid.size(),vector<int>(grid[0].size(),0));

    dyGrid[0][0] = grid[0][0];
    for (int i = 1; i < grid.size() ; ++i) {
        dyGrid[i][0] = dyGrid[i-1][0] + grid[i][0];
    }
    for (int j = 1; j < grid[0].size(); ++j) {
        dyGrid[0][j] = dyGrid[0][j-1] + grid[0][j];
    }
    for (int k = 1; k <grid.size() ; ++k) {
        for (int p = 1; p < grid[0].size(); ++p) {
            dyGrid[k][p] = min(dyGrid[k-1][p],dyGrid[k][p-1])+grid[k][p];
        }

    }
    return dyGrid[dyGrid.size()-1][dyGrid[0].size()-1];
    }
};