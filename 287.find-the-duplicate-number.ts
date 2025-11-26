/*
 * @lc app=leetcode id=287 lang=typescript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
    let i = 0;
    while (nums[i]) {
        [nums[i], i] = [0, nums[i]];
    }
    return i;
};
// @lc code=end

