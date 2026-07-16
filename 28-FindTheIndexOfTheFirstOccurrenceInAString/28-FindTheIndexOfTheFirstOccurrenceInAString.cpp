// Last updated: 16/7/2026, 9:21:42 pm
class Solution {
public:
    int strStr(string haystack, string needle) {
        return ((haystack.find(needle)!= string::npos)?(haystack.find(needle)):-1);
    }
};