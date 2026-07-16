// Last updated: 16/7/2026, 9:17:04 pm
class Solution {
public:
    string removeOccurrences(string s, string part) {
        if (part.empty() || s.empty())
            return s;
        int pos;
        while ((pos = s.find(part)) != string::npos) {
            s.erase(pos, part.size());
        }
        return s;
    }
};