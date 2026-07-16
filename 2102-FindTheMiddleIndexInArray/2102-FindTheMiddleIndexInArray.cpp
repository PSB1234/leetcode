// Last updated: 16/7/2026, 9:16:59 pm
class Solution {
public:
    int findMiddleIndex(vector<int>& nums) {
                vector<int> left;
        vector<int> right;
        int maxleft= 0;
        int maxright = 0;
        for (int i = 0;i<nums.size();i++) {
            left.emplace_back(maxleft);
            maxleft+=nums[i];
        }
        for (int i = nums.size()-1;i>=0;i--) {
            right.emplace_back(maxright);
            maxright+=nums[i];
        }
        for (int i = 0;i<nums.size();i++) {
            if(left[i]==right[nums.size()-i-1]) return i;
        }
        return -1;
    }
};