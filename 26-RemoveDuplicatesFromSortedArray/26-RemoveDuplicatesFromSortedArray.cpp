// Last updated: 16/7/2026, 9:21:45 pm
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
       if (nums.empty()) {
        return 0;
    }

    std::vector<int> eNums;
    eNums.push_back(nums[0]);

    for (int i = 1; i < nums.size(); i++) {
        if (nums[i] != nums[i - 1]) {
            eNums.push_back(nums[i]);
        }
    }

    nums = eNums;
    return eNums.size();

    }
};