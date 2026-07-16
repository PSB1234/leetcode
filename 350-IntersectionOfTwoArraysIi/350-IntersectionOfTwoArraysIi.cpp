// Last updated: 16/7/2026, 9:19:00 pm
class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int,int> umap;
        for (const auto &i:nums1) {
            umap[i]++;
        }
        vector<int> ans;
        for (const auto &j:nums2) {
            if (umap[j]>0){
                ans.push_back(j);
                umap[j]--;
            }
        }
    return ans;
    }
};