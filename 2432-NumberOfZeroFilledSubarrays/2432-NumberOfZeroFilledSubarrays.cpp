// Last updated: 16/7/2026, 9:16:38 pm
class Solution {
public:
    long long zeroFilledSubarray(vector<int>& nums) {
        long long int size  = 0;
    long long int ans = 0;
    for (int num : nums) {
        if (num == 0) {
            size ++;
        }
        else {
            ans+= (size*(size+1))/2;
            size = 0;
        }
    }
    if (size > 0) {
        ans+= (size*(size+1))/2;
    }
    return ans;
    }
};