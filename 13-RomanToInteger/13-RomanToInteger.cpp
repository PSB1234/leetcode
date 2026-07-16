// Last updated: 16/7/2026, 9:22:01 pm
class Solution {
public:
    int romanToInt(string s) {
      string roman = s;
    std::unordered_map<char, int> romanNumerals = {
        {'I', 1},
        {'V', 5},
        {'X', 10},
        {'L', 50},
        {'C', 100},
        {'D', 500},
        {'M', 1000}
    };
    int total = 0;
    for (int i = 0; i < roman.length(); ++i) {
        if (i < roman.length() - 1 && romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]) {
            total -= romanNumerals[roman[i]];
        } else {
            total += romanNumerals[roman[i]];
        }
    }
        return total;
    }
};