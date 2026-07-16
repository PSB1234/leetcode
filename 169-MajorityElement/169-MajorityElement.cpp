// Last updated: 16/7/2026, 9:20:06 pm
class Solution {
public:
    int majorityElement(vector<int>& nums) {
    unordered_map<int, int> umap;
    int maxFreq = 0;
    int ans = 0;
    
    for (int i = 0; i < nums.size(); ++i) {
        umap[nums[i]]++;
        if (umap[nums[i]] > maxFreq) {
            maxFreq = umap[nums[i]];
            ans = nums[i];
        }
    }
    
    return ans;
    }
};