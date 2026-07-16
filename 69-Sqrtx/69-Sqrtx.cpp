// Last updated: 16/7/2026, 9:21:18 pm
class Solution {
public:
    int mySqrt(int x) {
                int left = 0;
        int right = x;
        while(left<right){
            long int mid = (right-left)/2 + left;
            if((mid*mid)<=x && x<(mid+1)*(mid+1)){
                return mid;
            }else if ((mid*mid)>x)
            {
                right=mid;
            }else{
                left=mid+1;
            }
        }
        return left;
    }
};