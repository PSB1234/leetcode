// Last updated: 16/7/2026, 9:21:37 pm
function combinationSum(candidates: number[], target: number): number[][] {
    const ans: number[][] = [];
    function dfs(index: number, sum: number, current: number[]) {
        if (sum === target) {
            ans.push(current)
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            if (sum + candidates[i] <= target) {
                dfs(i, sum + candidates[i], [...current, candidates[i]]);
            }
        }
    }
    candidates.sort((a, b) => a - b);
    dfs(0, 0, []);
    return ans;
};