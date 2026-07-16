// Last updated: 16/7/2026, 9:17:12 pm
class Solution {
public:
    bool squareIsWhite(string coordinates) {
        int A  = (coordinates[0]-'a');
        int B  = (coordinates[1]-'0');
        return (A+B)%2 ==0;
    }
};