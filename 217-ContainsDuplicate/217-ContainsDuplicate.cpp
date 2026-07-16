// Last updated: 16/7/2026, 9:19:40 pm
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
      unordered_set<int> ans;
    for(int i =0;i<nums.size();i++){
        if(ans.find(nums[i]) == ans.end()){
            ans.insert(nums[i]);
        }
        else{
            return true;
        }
    }
    return false;
    }
};