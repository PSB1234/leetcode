// Last updated: 16/7/2026, 9:16:57 pm
class Solution {
public:
    bool helper(unordered_set<string>& uset, string& ans, int size) {
        if (ans.size() == size) {
            if (!uset.contains(ans))
                return true;
            return false;
        }
        for (char temp : {'0', '1'}) {
            ans.push_back(temp);
            if (helper(uset, ans, size)) {
                return true;
            }
            ans.pop_back();
        }

        return false;
    }
    string findDifferentBinaryString(vector<string>& nums) {
        string ans;
        unordered_set uset(nums.begin(), nums.end());

        if (helper(uset, ans, nums[0].size()))
            return ans;
        return "";
    }
};