// Last updated: 16/7/2026, 9:17:11 pm
class Solution {
public:
    string truncateSentence(string s, int k) {
        string ans;
        char a = ' ';
        for(int i = 0; i<s.size();i++){
            if(s[i] == a && s[i+1] != a){
               k--;
            
            }
            if( k == 0){
             ans = s.substr(0,i);
             break;
            }
            
        }
        if(k!=0 && ans.empty()){
            ans = s ;
        }
        return ans;

    }
};