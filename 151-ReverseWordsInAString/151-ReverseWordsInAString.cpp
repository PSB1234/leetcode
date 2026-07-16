// Last updated: 16/7/2026, 9:20:15 pm
class Solution {
public:
    string reverseWords(string s) {
        stack<string> stringa;
        int i = 0;
        int j;
        while (!s.empty()) {
            while (s[i] == ' ' && i < s.size())
                i++;
            j = i;
            while (s[j] != ' ' && j < s.size())
                j++;
            string temp = s.substr(i, j - i);
            s.erase(0, j);
            stringa.push(temp);
            temp.clear();
            i = 0;
        }
        while (!stringa.empty()) {
            if (stringa.top() == "")
                stringa.pop();
            if (stringa.size() != 1) {
                s.append(stringa.top() + ' ');
                stringa.pop();
            } else {
                s.append(stringa.top());
                stringa.pop();
            }
        }
        return s;
    }
};