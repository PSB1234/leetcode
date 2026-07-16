// Last updated: 16/7/2026, 9:18:55 pm
class Solution {
public:
    char findTheDifference(string s, string t) {
      int ans = 0;
  for (int j = 0; j < t.size(); j++)
  {
    ans += static_cast<int>(t[j]);
  }
  for (int i = 0; i < s.size(); i++)
  {
    ans -= static_cast<int>(s[i]);
  }

  return static_cast<char>(ans);
    }
};