// Last updated: 16/7/2026, 9:17:00 pm
class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        vector<int> ans(nums.size());
        for(int i = 0;i<nums.size();i++){
            ans[i] = nums[nums[i]];
        }
        return ans;
    }
};