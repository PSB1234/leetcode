// Last updated: 16/7/2026, 9:16:22 pm
class Solution {
public:
    int maxCount(vector<int>& banned, int n, int maxSum) {
        unordered_set<int> banChecker(banned.begin(), banned.end());
        int total = 0;
        int totalSum = 0;
        for (int i = 1; i <= n; i++) {

            if (banChecker.find(i) == banChecker.end()) {
                total++;
                totalSum += i;
            }
            if (totalSum + i + 1 > maxSum)
                break;
        }
        return total;
    }
};