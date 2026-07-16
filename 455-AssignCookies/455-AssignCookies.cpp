// Last updated: 16/7/2026, 9:18:47 pm
class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
        std::sort(g.begin(), g.end());
    std::sort(s.begin(), s.end());

    int ans = 0;
    int i = 0;
    int j = 0;

    while (i < g.size() && j < s.size()) {
        if (s[j] >= g[i]) {
            ans++;
            i++;
        }
        j++;
    }

    return ans;
    }
};