/*
 * @lc app=leetcode id=3318 lang=typescript
 *
 * [3318] Find X-Sum of All K-Long Subarrays I
 */

// @lc code=start
function findXSum(nums: number[], k: number, x: number): number[] {
    const frequency = new Map<number, number>();
    const ans: number[] = [];
    const n = nums.length;
    if (nums.length < x) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += nums[i]
        }
        return nums;
    }
    for (let i = 0; i < n - k + 1; i++) {
        //add to map
        for (let j = i; j < k + i; j++) {
            if (frequency.get(nums[j]) === undefined) {
                frequency.set(nums[j], 1);
            } else {
                frequency.set(nums[j], frequency.get(nums[j])! + 1);
            }
        }
        //sort the map by values
        const sortedMap = [...frequency].sort((a, b) => b[1] - a[1]);
        for (let k = 0; k < x; k++) {
            ans.push(sortedMap[k][0] * sortedMap[k][1]);
        }
    }
    return ans;
};
// @lc code=end

