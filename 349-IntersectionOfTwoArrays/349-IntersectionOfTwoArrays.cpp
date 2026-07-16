// Last updated: 16/7/2026, 9:19:02 pm
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
       unordered_map<int,int> umap1;
     unordered_map<int,int> umap2;
        for (int i = 0; i < nums1.size(); i++)
        {
          umap1[nums1[i]]++;
        }
        for (int j = 0; j < nums2.size(); j++)
        {
          umap2[nums2[j]]++;
        }
        vector<int> ans;
        for (auto& itr:umap1)
        {
          int number = itr.first;
          int frequency = itr.second;
          if(umap2.find(number) != umap2.end()){
            ans.push_back(number);
          }
        }
        return ans;
    }
};