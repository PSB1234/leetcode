// Last updated: 16/7/2026, 9:15:56 pm
class Solution {
public:
    vector<int> getSneakyNumbers(vector<int>& nums) {
        unordered_set<int> checker;
        vector<int> ans;
        for (int i = 0; i < nums.size(); i++) {
            if (checker.find(nums[i]) == checker.end()) {
                checker.insert(nums[i]);
            } else {
                ans.emplace_back(nums[i]);
            
            }
        }
        return ans;
    }
};