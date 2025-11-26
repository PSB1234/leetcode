/*
 * @lc app=leetcode id=474 lang=typescript
 *
 * [474] Ones and Zeroes
 */

// @lc code=start
function findMaxForm(strs: string[], m: number, n: number): number {
    const cache = new Array<{ m: number, n: number, i: number }>();
    function dfs(i: number, m: number, n: number) {
        if (i === strs.length) return 0;
        const mCt = strs[i].split("0").length - 1;
        const nCt = strs[i].split("1").length - 1;

        dfs(i + 1, m -)
        dfs(i + 1, m, n);
    }

    for (let i = 0; i < strs.length; i++) {

    }
};
// @lc code=end

