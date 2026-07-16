// Last updated: 16/7/2026, 9:15:58 pm
class Solution {
public:
    int minOperations(vector<int>& nums) {
    int count = 0;
    for (int i = 0;i<nums.size()-2;i++) {
        if (nums[i] == 0) {
            nums[i] = nums[i] ^1;
            nums[i+1] = nums[i+1]^1;
            nums[i+2] = nums[i+2]^1;
            count++;
        }
    }
    for (const auto num:nums) {
        if (num == 0) return -1;
    }
    return count;
    }
};