// Last updated: 16/7/2026, 9:21:36 pm
function combinationSum2(candidates: number[], target: number): number[][] {
    const ans:number[][] = []
    function recursion(candidates: number[],start:number,subset:number[], value: number){
        if(value<0){
            return;
        }
        if(value === 0){
            ans.push([...subset]);
            return;
        }
        for(let i = start;i<candidates.length;i++){
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            subset.push(candidates[i]);
            recursion(candidates,i+1,subset,value-candidates[i]);
            subset.pop();
        }
    }
    recursion(candidates.sort(),0,[],target);
    return ans;
};