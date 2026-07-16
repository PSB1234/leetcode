// Last updated: 16/7/2026, 9:16:06 pm
function minimumCost(nums: number[]): number {
    const first = nums.shift();
    nums.sort((a, b) => a - b);
    return first! + nums[0] + nums[1];

};