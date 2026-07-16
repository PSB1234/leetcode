// Last updated: 16/7/2026, 9:20:31 pm
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        unordered_map<int,int> umap;
        int ans=0;
        for (int i = 0; i < nums.size(); i++)
        {
          umap[nums[i]]++;
        }
        for (auto& itr:umap)
        {
          int value = itr.first;
          int frequency = itr.second;
          if(frequency == 1){
            ans = value;
          }
        }
        return ans;
    }
};