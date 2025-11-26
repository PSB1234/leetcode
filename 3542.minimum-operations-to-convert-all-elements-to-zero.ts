/*
 * @lc app=leetcode id=3542 lang=typescript
 *
 * [3542] Minimum Operations to Convert All Elements to Zero
 */

// @lc code=start
function minOperations(nums: number[]): number {
    let iteration = 0;
    const stack = new Array<number>()
    for (let i = 0; i < nums.length; i++) {
        while (stack.length !== 0 && stack[stack.length - 1] > nums[i]) {
            const poped = stack.pop();
            if (poped !== stack[stack.length - 1]) {
                iteration++;
            }
        }
        if (stack.length === 0 || stack[stack.length - 1] <= nums[i]) {
            stack.push(nums[i]);
        }
    }
    while (stack.length) {
        const pop = stack.pop();
        if (pop === stack[stack.length - 1] || pop === 0) continue;
        iteration++;
    }
    return iteration;
};
// @lc code=end

