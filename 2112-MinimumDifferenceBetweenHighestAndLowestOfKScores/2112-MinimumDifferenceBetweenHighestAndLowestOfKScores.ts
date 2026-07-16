// Last updated: 16/7/2026, 9:16:56 pm
function minimumDifference(nums: number[], k: number): number {
    if (k === 1) return 0;
    nums.sort((a, b) => a - b);
    let min = Infinity;
    for (let i = 0; i <= nums.length - k; i++) {
        min = Math.min(min, nums[i + k - 1] - nums[i]);
    }
    return min;
};