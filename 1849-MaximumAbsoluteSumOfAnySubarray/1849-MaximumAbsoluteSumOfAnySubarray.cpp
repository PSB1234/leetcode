// Last updated: 16/7/2026, 9:17:18 pm
class Solution {
public:
    int maxAbsoluteSum(vector<int>& nums) {
            int psum = 0;
    int maxSum = INT_MIN;
    int nsum = 0;
    int minSum = INT_MAX;
    for (const int i:nums) {
        psum+=i;
        maxSum = max(maxSum,psum);
        if (psum<0) {
            psum = 0;
        }
        nsum+=i;
        minSum = min(minSum,nsum);
        if (nsum>0) {
            nsum = 0;
        }
    }

    return max(maxSum,abs(minSum));
    }
};