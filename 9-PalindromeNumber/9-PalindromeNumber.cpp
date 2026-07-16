// Last updated: 16/7/2026, 9:22:05 pm
class Solution {
public:
    bool isPalindrome(int x) {
    long long int y = 0;
    long long int v = x;
     if(x<0){
      return false;
     }else{
      while(x>0){
        y=y*10+ x%10;
        x=x/10;
      }
      if(y==v){
        return true;
      }else{
        return false;
      }
     }
    }
};