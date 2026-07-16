// Last updated: 16/7/2026, 9:22:02 pm
class Solution {
public:
    string intToRoman(int num) {
           
        vector<pair<int,string>> roman = {
            {1000, "M"},
            {900, "CM"},
            {500, "D"},
            {400, "CD"},
            {100, "C"},
            {90, "XC"},
            {50, "L"},
            {40, "XL"},
            {10, "X"},
            {9, "IX"},
            {5, "V"},
            {4, "IV"},
            {1, "I"}
        };
        int  i = 0;
        string ans;
        while (num>0) {
            if(roman[i].first<=num) {
                int r = num/roman[i].first;
                num = num - r*roman[i].first;
                 while (r--) ans.append(roman[i].second);
            }
            i++;
        }
        return ans;
    }

};