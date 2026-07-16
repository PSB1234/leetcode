// Last updated: 16/7/2026, 9:21:15 pm
class Solution {
public:
    int climbStairs(int n) {
      int a = 1, b = 2, c, i;
       if (n == 0)
        return 0;
        if(n ==1){
            return 1;
        }
       for (i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
       }
    return b;
    }
};