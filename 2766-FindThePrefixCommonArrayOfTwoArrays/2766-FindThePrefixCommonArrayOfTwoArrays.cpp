// Last updated: 16/7/2026, 9:16:16 pm
class Solution {
public:
    vector<int> findThePrefixCommonArray(vector<int>& A, vector<int>& B) {
            int same = 0;
    vector<int> C;
    unordered_set<int> check;
    for (int i =0;i<A.size();i++)
    {
        if(check.find(A[i])!= check.end())
        {
            same++;
        }
        check.emplace(A[i]);

        if (check.find(B[i])!= check.end())
        {
            same++;
        } 
        check.emplace(B[i]);
        C.emplace_back(same);
    }
    return C;
    }
};