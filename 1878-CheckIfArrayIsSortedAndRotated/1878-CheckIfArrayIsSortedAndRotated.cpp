// Last updated: 16/7/2026, 9:17:16 pm
class Solution {
public:
    bool check(vector<int>& nums) {
        int rotationPtn = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > nums[(i + 1) % nums.size()]) {
                rotationPtn++;
            }
        }
        return !(rotationPtn > 1);
    }
};