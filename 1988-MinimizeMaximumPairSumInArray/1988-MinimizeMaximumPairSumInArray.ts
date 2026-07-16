// Last updated: 16/7/2026, 9:17:07 pm
function minPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    let pair = nums.length / 2;
    let max = -Infinity
    while (left <= right) {
        max = Math.max(max, nums[left] + nums[right]);
        left++;
        right--;
    }
    return max
};
