// Last updated: 16/7/2026, 9:18:54 pm
class Solution {
public:
    bool isSubsequence(string s, string t) {
        if (s.empty())
            return true;
        if(t.empty())
            return false;
        int i = 0;
        int j = 0;
        while (j < t.size()) {
            if (s[i] == t[j]) {
                i++;
                j++;
            } else {
                j++;
            }
            if (i >= s.size()) {
                return true;
            }
        }
        return false;
    }
};