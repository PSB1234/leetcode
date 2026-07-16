// Last updated: 16/7/2026, 9:20:33 pm
function partition(s: string): string[][] {
    const ans: string[][]  = [];
    const palindrome:string[] = [];
    function isPalindrome(sub: string): boolean {
        if (sub.length === 1 ) return true;
        let left = 0;
        let right = sub.length - 1;
        while (left < right) {
            if (sub[left] !== sub[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    function addPalindrome(start: number){
        if (start === s.length) {
            ans.push([...palindrome]);
            return;
        }

        for (let i = start + 1; i <= s.length; i++) {
            const temp = s.substring(start, i);
            if (!isPalindrome(temp)) continue; 

            palindrome.push(temp);          
            addPalindrome(i);            
            palindrome.pop();              
        }
    }
    addPalindrome(0);
    return ans;
};