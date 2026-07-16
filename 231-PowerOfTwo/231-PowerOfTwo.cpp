// Last updated: 16/7/2026, 9:19:32 pm
class Solution {
public:
    bool isPowerOfTwo(int n) {
      return n<1? false:(n&(n-1))==0?true:false;
    }
};