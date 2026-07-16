// Last updated: 16/7/2026, 9:22:13 pm
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
         vector<int> ans;
    unordered_map<int,int> umap;
    for (int i = 0; i < nums.size(); i++)
    {   
        if(umap.find(target-nums[i]) != umap.end()){
           ans.push_back(umap[target-nums[i]]);
           ans.push_back(i);
           return ans;
        }else{
            umap.insert({nums[i],i});
        }
    }
    return ans;
    }
};