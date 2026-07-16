// Last updated: 16/7/2026, 9:20:38 pm
class Solution {
public:
    bool isPalindrome(string s) {
    s.erase(remove(s.begin(), s.end(), ' '), s.end());
    int i = 0 ;
    int j = s.size()-1;
    while (i<j)
    {   
         
        if(!isalnum(s[i])&& i < j ){
            i++;
            continue;
        }  
        if(!isalnum(s[j])&& i < j){
            j--;
            continue;
        }
        if(tolower(s[i])!=tolower(s[j])){
            return false;
        }
            i++;
            j--; 
    }
    
    return true;
    }
};