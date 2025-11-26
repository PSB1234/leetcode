/*
 * @lc app=leetcode id=2154 lang=typescript
 *
 * [2154] Keep Multiplying Found Values by Two
 */

// @lc code=start
function findFinalValue(nums: number[], original: number): number {
    const numSet = new Set(nums);
    while (true) {
        if (numSet.has(original)) {
            original *= 2;
        } else {
            break;
        }
    }
    return original;
};
// @lc code=end

