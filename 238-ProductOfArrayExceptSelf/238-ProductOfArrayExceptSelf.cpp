// Last updated: 16/7/2026, 9:19:27 pm
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
            vector<int>ans;
    int suffix = 1;
    int n = nums.size()-1;
    ans.push_back(1);
    for (int i = 1;i<=n;i++) {
        ans.push_back(ans[i-1]*nums[i-1]);
    }
    for (int j = n-1;j>=0;j--) {
        suffix *= nums[j+1];
        ans[j] *= suffix;
    }
    return ans;
    }
};