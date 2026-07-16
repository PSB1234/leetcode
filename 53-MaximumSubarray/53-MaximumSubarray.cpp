// Last updated: 16/7/2026, 9:21:27 pm
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
            int sum = 0;
    int maxSum = INT_MIN;
    for (const int i:nums) {
        if (sum<0) {
            sum = 0;
        }
        sum+=i;
        maxSum = max(maxSum,sum);
    }
    return maxSum;
    }
};