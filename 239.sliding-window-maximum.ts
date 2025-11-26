/*
 * @lc app=leetcode id=239 lang=typescript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
    const queue: number[] = [];
    const ans: number[] = [];
    let max: number = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (queue.length < k) {
            max = Math.max(max, nums[i])
            queue.push(nums[i]);
        } else {
            ans.push(max);
            queue.shift();
            max = Math.max(max, nums[i])
            queue.push(nums[i]);
        }
    }
    ans.push(max);
    return ans;
};
// @lc code=end

