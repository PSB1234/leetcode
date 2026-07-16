// Last updated: 16/7/2026, 9:17:03 pm
class Solution {
public:
    string largestOddNumber(string num) {
            int val = -1;
            string ans;
            for (int i = num.size() - 1; i >= 0; i--) {
            if(int(num[i])%2){
               val = i;
               break;   
            }
            }
           if(val!=-1){
            ans = num.substr(0, val + 1);
           }
 
        return ans;
    }
};