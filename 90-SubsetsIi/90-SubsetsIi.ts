// Last updated: 16/7/2026, 9:21:00 pm
function subsetsWithDup(nums: number[]): number[][] {
    let res: number[][] = [];
    nums.sort((a, b) => a - b);
    function backtrack(start: number, path: number[]) {
        res.push([...path]);
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue; 
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }
    backtrack(0, []);
    return res;
};