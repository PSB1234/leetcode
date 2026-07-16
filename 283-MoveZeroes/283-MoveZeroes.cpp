// Last updated: 16/7/2026, 9:19:18 pm
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
            int a=0;
    for(int i=0;i<nums.size();i++){
        if(nums[i]!=0){
            nums[a]=nums[i];
            a++;
        }

    }


    for(int i=a;i<nums.size();i++){
        nums[i]=0;
    }
    }
};