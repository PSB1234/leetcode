// Last updated: 16/7/2026, 9:21:40 pm
class Solution {
public:
int searchInsert(vector<int>& nums, int target) {
        for(int i=0; i< nums.size();i++){
          if(nums[i] >= target){
             return i;
          } 
        }
        return nums.size();
     }
    
};