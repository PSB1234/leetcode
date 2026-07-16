// Last updated: 16/7/2026, 9:17:24 pm
class Solution {
public:
    int countStudents(vector<int>& students, vector<int>& sandwiches) {
          unordered_map<int, int> umap;
  int ans = 0;
  for (int i = 0; i < students.size(); i++)
  {
    umap[students[i]]++;
  }
  for (int j = 0; j < sandwiches.size(); j++)
  {
    if (umap.find(sandwiches[j]) != umap.end()&& umap[sandwiches[j]] > 0)
    {
      umap[sandwiches[j]]--;
    }else{
        break;
    }
     
  }
  for (auto &pair : umap)
  {
    ans += pair.second;
  }

  return ans;
    }
};