// Last updated: 16/7/2026, 9:21:32 pm
class Solution {
public:
  void rotate(vector<vector<int>>& matrix) {
    int sizeOfMatrix = matrix[0].size();
    vector<vector<int>> rotated;
    for (int i = 0; i < sizeOfMatrix; i++) {
        vector<int> column;
        for (int j = matrix.size() - 1; j >= 0; j--) {
            column.push_back(matrix[j][i]);
        }
        rotated.push_back(column);
    }
    matrix = rotated;
}
};