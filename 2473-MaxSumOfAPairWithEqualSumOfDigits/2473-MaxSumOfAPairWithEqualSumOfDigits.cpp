// Last updated: 16/7/2026, 9:16:35 pm
class Solution {
public:
    int maximumSum(vector<int>& nums) {
        vector<int> refactoredList;
        for (int number : nums) {
            if (number > 9) {
                int ans = 0;
                while (number > 0) {
                    ans = number % 10 + ans;
                    number = number / 10;
                }
                refactoredList.push_back(ans);
            } else {
                refactoredList.push_back(number);
            }
        }
        unordered_map<int, vector<int>> list;
        for (int i = 0; i < refactoredList.size(); i++) {
            list[refactoredList[i]].push_back(i);
        }
        int maxans = -1;
        for (const auto& [a, b] : list) {
            if (b.size() >= 2) {
                int firstMax = 0, secondMax = 0;
                for (int idx : b) {
                    if (nums[idx] > firstMax) {
                        secondMax = firstMax;
                        firstMax = nums[idx];
                    } else if (nums[idx] > secondMax) {
                        secondMax = nums[idx];
                    }
                }
                maxans = max(maxans, firstMax + secondMax);
            }
        }

        return maxans;
    }
};