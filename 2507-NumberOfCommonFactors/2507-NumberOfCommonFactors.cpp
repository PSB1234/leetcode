// Last updated: 16/7/2026, 9:16:30 pm
class Solution {
public:
    int commonFactors(int a, int b) {
    int ans = 0;
    for (int i = 1; i <=max(a,b); ++i) {
        if(a%i==0 && b%i==0){ 
            ans++;
        }
    }
    return ans;
    }
};