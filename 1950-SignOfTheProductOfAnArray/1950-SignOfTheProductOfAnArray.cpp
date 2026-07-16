// Last updated: 16/7/2026, 9:17:09 pm
class Solution {
public:
    int arraySign(vector<int>& nums) {
            int numc =0 ;
        for(int i =0; i<nums.size();i++){
         if(nums[i]<0){
            numc++;
         }
         else if(nums[i] == 0){
            return 0;
         }
        }
        int ans = numc%2 == 0?1:-1;
        return ans;
    }
};