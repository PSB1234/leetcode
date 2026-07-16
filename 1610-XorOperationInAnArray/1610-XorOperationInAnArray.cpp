// Last updated: 16/7/2026, 9:17:37 pm
class Solution {
public:
    int xorOperation(int n, int start) {
            vector<int> nums(n);
    for (int i = 0; i < n; ++i) {
        nums[i] = start + 2 * i;
    }
    
    for (int j = 1; j < n; ++j) {
        nums[j] = nums[j]^ nums[j-1];
    }
    return nums[n-1];
    }
};