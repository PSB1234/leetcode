/*
 * @lc app=leetcode id=976 lang=typescript
 *
 * [976] Largest Perimeter Triangle
 */

// @lc code=start
function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => b - a);
    let perimeter = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            perimeter = Math.max(perimeter, nums[i] + nums[i + 1] + nums[i + 2]);
        }
    }
    return perimeter;
};


// @lc code=end

