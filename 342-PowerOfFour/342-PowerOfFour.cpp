// Last updated: 16/7/2026, 9:19:08 pm
class Solution {
public:
    bool isPowerOfFour(int n) {
        if(!n)return false;
if(n==1)return true;
if(n%4==0) return isPowerOfFour(n/4);
else return false;
    }
};