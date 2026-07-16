// Last updated: 16/7/2026, 9:16:42 pm
class Solution {
public:
    bool divideArray(vector<int>& nums) {
        unordered_map<int, int> umap;
        for (const auto i : nums) {
            umap[i]++;
        }
        for (const auto [a, b] : umap) {
            if (b % 2 != 0)
                return false;
        }
        return true;
    }
};