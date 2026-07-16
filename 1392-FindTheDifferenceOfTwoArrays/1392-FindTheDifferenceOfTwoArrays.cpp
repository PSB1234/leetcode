// Last updated: 16/7/2026, 9:17:50 pm
class Solution {
public:
    vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        vector<vector<int>> ans;
        vector<int> temp;
        for (const auto num : nums1) {
            if (find(nums2.begin(), nums2.end(), num) == nums2.end() &&
                find(temp.begin(), temp.end(), num) == temp.end()) {
                temp.emplace_back(num);
            }
        }
        ans.emplace_back(temp);
        temp.clear();
        for (const auto num : nums2) {
            if (find(nums1.begin(), nums1.end(), num) == nums1.end() &&
                find(temp.begin(), temp.end(), num) == temp.end()) {
                temp.emplace_back(num);
            }
        }
        ans.emplace_back(temp);
        return ans;
    }
};