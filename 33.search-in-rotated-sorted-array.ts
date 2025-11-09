/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
function binarySearchRange(nums: number[], left: number, right: number, target: number): number {
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const middle = left + Math.floor((right - left) / 2);
        if (nums[middle] > nums[right]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    const pivot = left;
    if (target >= nums[pivot] && target <= nums[nums.length - 1]) {
        return binarySearchRange(nums, pivot, nums.length - 1, target);
    } else {
        return binarySearchRange(nums, 0, pivot - 1, target);
    }

};
// @lc code=end

