// Last updated: 16/7/2026, 9:16:24 pm
class Solution {
public:
    int differenceOfSum(vector<int>& nums) {
        int sum = std::accumulate(nums.begin(), nums.end(), 0);
    int sod = 0;
    int ans;

    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] < 10) {
            sod += nums[i];
        } else {
            int digits = nums[i];
            int d = 0;
            while (digits > 0) {
                d += digits % 10;
                digits /= 10;
            }
            sod += d;
        }
    }

    ans = abs(sum - sod);
    return ans;
    }
};