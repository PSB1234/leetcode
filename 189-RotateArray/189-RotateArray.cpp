// Last updated: 16/7/2026, 9:20:03 pm
class Solution {
public:
    void rotate(vector<int>& nums, int k) {
                vector<int> a = nums;
        for (int i =0;i<nums.size();i++) {
            nums[(i+k)%nums.size()] = a[i];
        }
    }
};