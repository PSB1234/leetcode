// Last updated: 16/7/2026, 9:19:22 pm
class Solution {
public:
int sumdigit(int a){
    int anso  =0 ;
    while(a>0){
                anso+=a%10;
                a/=10;
    }
    return anso;
}
    int addDigits(int num) {
         int ans=0 ;
        int pp = 10 ;
        while(pp>9){
            ans  = sumdigit(num);
            if(ans>9){
             num = ans;
            }else
            {
             pp = ans;
            }
            

        }
        return pp;
    }
};