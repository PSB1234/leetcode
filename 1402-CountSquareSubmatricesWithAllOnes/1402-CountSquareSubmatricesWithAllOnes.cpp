// Last updated: 16/7/2026, 9:17:49 pm
class Solution {
public:
    int countSquares(vector<vector<int>>& matrix) {
            vector<vector<int>> dp = matrix;
    for (int i = 1; i < matrix.size(); i++) {
        for (int j = 1; j < matrix[i].size(); j++) {
            int  top = dp[i -1][j],
                 left = dp[i][j-1],
                 diagonal = dp[i-1][j-1],
                 current = dp[i][j] ;
            if (top == 0 || left == 0|| diagonal == 0 || current == 0) {
                dp[i][j] = matrix[i][j];
            }else{
                dp[i][j] = min({top, left, diagonal}) + 1;
            }
        }
    }
    int result = 0;
    for (auto & i : dp) {
        for (int j : i) {
            result += j;
        }
    }
    return result;

    }
};