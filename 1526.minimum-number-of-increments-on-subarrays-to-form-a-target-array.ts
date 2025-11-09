/*
 * @lc app=leetcode id=1526 lang=typescript
 *
 * [1526] Minimum Number of Increments on Subarrays to Form a Target Array
 */

// @lc code=start
function minNumberOperations(target: number[]): number {
    let result = target[0];
    for (let i = 1; i < target.length; i++) {
        if (target[i - 1] < target[i]) {
            result += target[i] - target[i - 1];
        }
    }
    return result;
};
// @lc code=end

