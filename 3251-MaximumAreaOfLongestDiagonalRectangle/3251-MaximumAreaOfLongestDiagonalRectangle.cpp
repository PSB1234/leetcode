// Last updated: 16/7/2026, 9:16:08 pm
class Solution {
public:
    int areaOfMaxDiagonal(vector<vector<int>>& dimensions) {
        long long max_diag_sq = -1;
        int max_area = 0;

        for (const auto& dim : dimensions) {
            long long l = dim[0];
            long long w = dim[1];

            long long current_diag_sq = l * l + w * w;
            int current_area = l * w;

            if (current_diag_sq > max_diag_sq) {
                max_diag_sq = current_diag_sq;
                max_area = current_area;
            } else if (current_diag_sq == max_diag_sq) {
                if (current_area > max_area) {
                    max_area = current_area;
                }
            }
        }
        return max_area;
    }
};