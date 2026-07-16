// Last updated: 16/7/2026, 9:17:45 pm
class Solution {
public:
    void helper(vector<string>& container, string& character, int n) {
        char alphabets[3] = {'a', 'b', 'c'};
        if (n == character.size()) {
            container.emplace_back(character);
            return;
        }
        for (const auto a : alphabets) {
            if (!character.empty() && a == character.back())
                continue;
            character.push_back(a);
            helper(container, character, n);
            character.pop_back();
        }
    }
    string getHappyString(int n, int k) {
        vector<string> container;
        string character;
        helper(container, character, n);
        if (k > container.size())
            return "";
        return container[k - 1];
    }
};