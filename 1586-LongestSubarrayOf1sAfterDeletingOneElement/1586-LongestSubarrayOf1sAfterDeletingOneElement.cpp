// Last updated: 16/7/2026, 9:17:38 pm
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
                int prev  = 0;
        int next  = 0;
        int maxi  = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == 0) {
                if (maxi < prev + next) {
                    maxi = prev + next;
                }
                prev = next;
                next =  0;
            }else {
                next++;
            }
        }
        if (maxi < prev + next) {
            maxi = prev + next;
        } if (maxi == next && next == nums.size()) {
            return nums.size()-1;
        }
        return maxi;
    }
};