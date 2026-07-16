// Last updated: 16/7/2026, 9:21:29 pm
class Solution {
public:
    double myPow(double x, int n) {

        if (n == 0)
            return 1;
        if (n < 0) {
            x = 1 / x;
            if (n == INT_MIN) {
                return x * myPow(x, -(n + 1));
            }
            n = -n;
        }

        double half = myPow(x, n / 2);
        if (n % 2 == 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    }
};