// Last updated: 16/7/2026, 9:16:54 pm
class Solution {
public:
    string firstPalindrome(vector<string>& words) {
         for (int i = 0; i < words.size(); ++i) {
        string reversed(words[i].rbegin(),words[i].rend());
        if(reversed == words[i]){
            return words[i];
        }
    }
    return "";
    }
};