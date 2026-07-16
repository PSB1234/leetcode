// Last updated: 16/7/2026, 9:18:26 pm
class Solution {
public:
    int search(vector<int>& nums, int target) {
                int left  = 0;
         int right  = nums.size()-1;
         
         while(left<=right){
            int middle = (right-left)/2 + left;
             if(target == nums[middle]){
                return middle;
             }else if(target > nums[middle]){
                 left = middle+1;
             }else{
                 right = middle-1;
             }
         }
         return -1; 
    }
};