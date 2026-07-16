// Last updated: 16/7/2026, 9:16:36 pm
class Solution {
public:
bool helper(string pattern,unordered_set<int>& check,string& ans,int ptr,int num) {
    if (ptr == pattern.size()) { // Base case: if all characters are processed
        ans.push_back('0' + num);
        return true;
    }
    ans.push_back('0' + num);
    check.insert(num);

    if (pattern[ptr] == 'I') {
        for (int i = num + 1; i <= 9; i++) {
            if (!check.contains(i)) {
                if (helper(pattern, check, ans, ptr + 1, i)) return true;
            }
        }
    } else {
        for (int j = num - 1; j >= 1; j--) {
            if (!check.contains(j)) {
                if (helper(pattern, check, ans, ptr + 1, j)) return true;
            }
        }
    }

    ans.pop_back();
    check.erase(num);
    return false;
}
string smallestNumber(string pattern) {
        unordered_set<int> check;
        string ans = "";
    for (int i = 1; i <= 9; i++) { 
        ans = "";
        check.clear();
        if (helper(pattern, check, ans, 0, i)) {
            return ans;
        }
    }
    return ans;

}
};