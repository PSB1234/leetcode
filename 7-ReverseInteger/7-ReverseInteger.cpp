// Last updated: 16/7/2026, 9:22:06 pm
class Solution {
public:
   long long int reverse(int x) {
        long long int ans =0 ;
        while(x!=0){
            
            ans = ans*10+(x%10);
            x = x / 10;
        }
        if((ans>(pow(2,31)-1))||(ans<(-pow(2,31)))){
            return 0;
        }else{
            return ans;
        }
}
};