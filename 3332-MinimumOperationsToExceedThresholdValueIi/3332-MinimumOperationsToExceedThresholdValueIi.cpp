// Last updated: 16/7/2026, 9:16:05 pm
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {

        int steps = 0;
        priority_queue<long, vector<long>, greater<>> sorter(nums.begin(),
                                                             nums.end());
        while (nums.size() >= 2) {
            long x = sorter.top();
            if (x >= k)
                return steps;
            sorter.pop();
            long y = sorter.top();
            sorter.pop();
            sorter.push(2 * x + y);
            steps++;
        }

        return steps;
    }
};