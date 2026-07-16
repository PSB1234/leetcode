// Last updated: 16/7/2026, 9:21:56 pm
function letterCombinations(digits: string): string[] {
    const alphaMap: Record<string, string[]> = {
        "2": ['a', 'b', 'c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z'],
      };
      
    const ans:string[] = [];
    let temp = '';
    function recursion(digit:number){
        if(digit>=digits.length){
            ans.push(temp);
            return;
        }
        const numberpad = alphaMap[digits[digit]];
        for(let i = 0;i<numberpad.length;i++){
            temp += numberpad[i];
            recursion(digit+1);
            temp = temp.slice(0,-1);
        }
    }
    recursion(0);
    return ans;
};