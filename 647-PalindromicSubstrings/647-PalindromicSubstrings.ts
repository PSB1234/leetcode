// Last updated: 16/7/2026, 9:18:35 pm
function countSubstrings(s: string): number {
    let res = 0;
    for(let i= 0;i<s.length;i++){
        let l = i;
        let r = i;
        while(l>=0 && r<s.length && s[l]===s[r]){
            res++;
            l--;
            r++;
        }
         l = i;
         r = i+1;
        while(l>=0 && r<s.length && s[l]===s[r]){
            res++;
            l--;
            r++;
        }
        
    }
    return res;
};