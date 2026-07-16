// Last updated: 16/7/2026, 9:20:18 pm
class Solution {
public:
    int findMin(vector<int>& nums) {
            int low = 0;
    int high = nums.size()-1;
    int middle;
    while(low<high){
        middle = low + (high-low)/2;
        if(nums[low]<nums[high]){
            return nums[low];
        }
        if(nums[low]<=nums[middle])
        {
            low = middle + 1;
        }else{
            high = middle;
        }

    }
    return nums[low];
    }
};