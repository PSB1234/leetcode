// Last updated: 16/7/2026, 9:16:55 pm
class Solution {
public:
    int finalValueAfterOperations(vector<string>& operations) {
        int x = 0;
        for (int i = 0; i < operations.size(); ++i) {
            if (operations[i] == "--X" ||operations[i] == "X--" ) {
                --x;
            } else{
                x++;
            }
        }
        return x;
    }
};