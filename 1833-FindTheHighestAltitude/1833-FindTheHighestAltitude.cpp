// Last updated: 16/7/2026, 9:17:19 pm
class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int max  = 0;
        int sum = 0;
        for (int i : gain) {
            sum+=i;
            max = max<sum?sum:max;
        }
        return max;
    }
};