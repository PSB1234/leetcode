// Last updated: 16/7/2026, 9:16:32 pm
class Solution {
public:
    vector<string> sortPeople(vector<string>& names, vector<int>& heights) {
        struct DescendingComparator {
        bool operator()(const int& lhs, const int& rhs) const {
            return lhs > rhs;
        }
    };
        map<int,string, DescendingComparator>hname;
        for (int i = 0; i < names.size(); ++i) {
            hname[heights[i]] = names[i];
        }
        vector<string> people;
    for (const auto &[i,j]:hname) {
        people.emplace_back(j);
    }
    return people;
    }
};