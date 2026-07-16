// Last updated: 16/7/2026, 9:19:48 pm
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        vector<pair<int, int>> arr;
        int left = 0;
        int right = 0;
        int sum = 0;
        while (right < nums.size()) {
            if (target > sum) {
                sum += nums[right];
                right++;
            } else {
                arr.emplace_back(left, right);
                sum -= nums[left];
                left++;
            }
        }
        while (left < right && target <= sum) {
            arr.emplace_back(left, right);
            sum -= nums[left];
            left++;
        }

        int size = INT_MAX;
        for (auto& i : arr) {
            if (size > abs(i.first - i.second)) {
                size = abs(i.first - i.second);
            }
        }
        return  size == INT_MAX?0:size;
    }

}
;