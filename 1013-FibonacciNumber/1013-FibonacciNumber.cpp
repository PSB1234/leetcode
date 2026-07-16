// Last updated: 16/7/2026, 9:18:11 pm
class Solution {
public:
    int fib(int n) {
        int a = 0, b = 1, c, i;
    if (n == 0)
        return a;
    for (i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
    }
};