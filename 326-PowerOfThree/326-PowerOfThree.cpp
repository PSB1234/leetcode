// Last updated: 16/7/2026, 9:19:11 pm
class Solution {
public:
    bool isPowerOfThree(int n) {
    if(n<=0) return false;
      if(n==1) return true;
      if (n%3==0)
      {
        return isPowerOfThree(n/3);
      }
      return false;
    }
};