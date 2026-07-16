// Last updated: 16/7/2026, 9:22:08 pm
function longestPalindrome(s: string): string {
    let res = '';
    let resLen = 0;
    for(let i= 0;i<s.length;i++){
        let l = i;
        let r = i;
        while(l>=0 && r<s.length && s[l]===s[r]){
            if(resLen<r-l+1){
                resLen=r-l+1;
                res = s.substring(l,r+1);
            }
            l--;
            r++;
        }
         l = i;
         r = i+1;
        while(l>=0 && r<s.length && s[l]===s[r]){
            if(resLen<r-l+1){
                resLen=r-l+1;
                res = s.substring(l,r+1);
            }
            l--;
            r++;
        }
        
    }
    return res;
};