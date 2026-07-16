// Last updated: 16/7/2026, 9:19:24 pm
class Solution {
public:
    bool isAnagram(string s, string t) {
        unordered_map<char, int> cont;
        for (const auto& chars : s) {
            cont[chars]++;
        }
        for (const auto& ch : t) {
            cont[ch]--;
            if (cont[ch] == 0)
                cont.erase(ch);
        }
        return cont.empty();
    }
};