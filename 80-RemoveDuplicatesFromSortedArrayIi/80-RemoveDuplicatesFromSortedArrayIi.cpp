// Last updated: 16/7/2026, 9:21:06 pm
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
    int i = 0;
    for (int n : nums)
        if (i < 2 || n > nums[i-2])
            nums[i++] = n;
    return i;
    }
};