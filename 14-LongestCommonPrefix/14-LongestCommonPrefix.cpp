// Last updated: 16/7/2026, 9:21:59 pm
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
      if (strs.empty()) {
        return ""; 
    }

    std::string first = strs[0];
    std::string ans;
    int prevcount = first.size(); 

    for (int v = 1; v < strs.size(); v++) {
        int count = 0;
        for (int i = 0; i < std::min(first.size(), strs[v].size()); i++) {
            if (first[i] == strs[v][i]) {
                count++;
            } else {
                break; 
            }
        }
        prevcount = std::min(prevcount, count);
    }

    ans = first.substr(0, prevcount);
    return ans;
  }
};