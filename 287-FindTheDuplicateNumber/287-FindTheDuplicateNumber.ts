// Last updated: 16/7/2026, 9:19:17 pm
function findDuplicate(nums: number[]): number {
    let i = 0;
    while (nums[i]) {
        [nums[i], i] = [0, nums[i]];
    }
    return i;
};