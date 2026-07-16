// Last updated: 16/7/2026, 9:21:31 pm
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
    vector<string> copy = strs;
    unordered_map<string,vector<string>> frequency;
    vector<vector<string >> ans;
    for (string& c:copy) {
        sort(c.begin(),c.end());
    }
    for (size_t i = 0; i <strs.size() ; ++i) {
        frequency[copy[i]].push_back(strs[i]);
    }

    for (const auto& list:frequency) {
        ans.push_back(list.second);
    }
    return ans;
    }
};