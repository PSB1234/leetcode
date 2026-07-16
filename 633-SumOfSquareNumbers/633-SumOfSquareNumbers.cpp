// Last updated: 16/7/2026, 9:18:37 pm
class Solution {
public:
    bool judgeSquareSum(int c) {
    double a,p;
    for (int i = 0; i <= sqrt(c); i++)
    {
        a=sqrt(c-pow(i,2));
        if(modf(a, &p) == 0.0){
            return true;
        }
        
    }
    return false;
    }
};