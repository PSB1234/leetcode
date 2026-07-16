// Last updated: 16/7/2026, 9:15:59 pm
class Solution {
public:
    bool isArraySpecial(vector<int>& nums) {
        for (int i = 0; i < nums.size() - 1; i++) {
            int parity = nums[i] % 2 == 0 ? 0 : 1;
            int nextNum = nums[i + 1] % 2 == 0 ? 0 : 1;
            int xnor = !(parity ^ nextNum);
            if (xnor) {
                return false;
            }
        }
        return true;
    }
};