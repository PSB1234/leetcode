// Last updated: 16/7/2026, 9:16:49 pm
class Solution {
public:
    int minimumSum(int num) {
        string nums  = to_string(num);
        sort(nums.begin(),nums.end());
        int a = stoi(string(1, nums[0]) + string(1, nums[3]));
        int b = stoi(string(1, nums[1]) + string(1, nums[2]));
        return a+b;
    }
};