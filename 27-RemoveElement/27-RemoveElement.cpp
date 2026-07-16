// Last updated: 16/7/2026, 9:21:44 pm
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
    nums.erase(remove(nums.begin(),nums.end(),val),nums.end()) ;
    int k = nums.size();
    return k;
    }
};