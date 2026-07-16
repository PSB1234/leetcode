// Last updated: 16/7/2026, 9:17:08 pm
class Solution {
public:
    bool checkIfPangram(string sentence) {
        set<int> alpha;
        for(int a:sentence){
            alpha.insert(a);
        }
        return (alpha.size() == 26 );
    }
};