// Last updated: 16/7/2026, 9:21:10 pm
function subsets(nums: number[]): number[][] {
    const array: number[][] = [];
    const subset: number[] = [];
    function dfs(index: number): void {
        if (index >= nums.length) {
            array.push([...subset]);
            return;
        }
        subset.push(nums[index]);
        dfs(index + 1);
        subset.pop();
        dfs(index + 1);
    }
    dfs(0);
    return array;
};