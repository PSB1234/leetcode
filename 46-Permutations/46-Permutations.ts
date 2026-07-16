// Last updated: 16/7/2026, 9:21:33 pm
function permute(nums: number[]): number[][] {
    const ans:number[][] = [];
    const sol:number[] = [];
    function recursion(arr:number[]){
        if(arr.length === 0){
            ans.push([...sol]);
            return;
        }
        for(let i=0;i<arr.length;i++){
            sol.push(arr[i]);
            recursion(arr.filter((_,index)=>index!==i));
            sol.pop();
        }
    }
    recursion(nums);
    return ans;
};