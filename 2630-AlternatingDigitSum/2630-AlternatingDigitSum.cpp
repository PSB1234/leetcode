// Last updated: 16/7/2026, 9:16:23 pm
class Solution {
public:
bool isEvenNumberOfDigits(int n) {
    n = abs(n);
    int digitCount = 0;
    while (n > 0) {
        n /= 10;
        digitCount++;
    }
    return digitCount % 2 == 0;
}
int alternateDigitSum(int n) {
        int ans = 0;
        int count = isEvenNumberOfDigits(n) == true?1:0;
        while(n>0){
            ans+=pow(-1,count%2)*(n%10);
            n/=10;
            
            count++;
        }
        return ans ;
    }
};