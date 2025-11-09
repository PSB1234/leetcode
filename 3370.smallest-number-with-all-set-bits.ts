/*
 * @lc app=leetcode id=3370 lang=typescript
 *
 * [3370] Smallest Number With All Set Bits
 */

// @lc code=start
function smallestNumber(n: number): number {
    return parseInt((n >>> 0).toString(2).replaceAll("0", "1"), 2);
};
// @lc code=end

