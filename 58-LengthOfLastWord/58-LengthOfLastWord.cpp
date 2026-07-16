// Last updated: 16/7/2026, 9:21:23 pm
class Solution {
public:
    int lengthOfLastWord(string s) {
         int length = 0;
          int i = s.size()-1;
        while (i>=0 && s[i] == ' ')
        {
          i--;
        }
        while (i>=0 && s[i] != ' ')
        {
          length++;
          i--;
        }
        return length;
    }
};