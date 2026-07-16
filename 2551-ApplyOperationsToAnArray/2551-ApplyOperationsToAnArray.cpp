// Last updated: 16/7/2026, 9:16:27 pm
class Solution {
public:
    vector<int> applyOperations(vector<int>& nums) {
         for (int i =0 ;i<nums.size()-1;i++) {
     if (nums[i] == nums[i+1]) {
         nums[i] = 2*nums[i];
         nums[i+1] = 0;
     }
 }
    int nonZeroPos = 0;
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] != 0) {
            swap(nums[i], nums[nonZeroPos]);
            nonZeroPos++;
        }
    }
    return nums;
    }
};