// Last updated: 16/7/2026, 9:15:54 pm
function simulation(nums: number[], index: number): number {
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i < index) {
            leftSum += nums[i];
        } else {
            rightSum += nums[i];
        }
    }
    if (Math.abs(rightSum - leftSum) === 0) return 2;
    if (Math.abs(rightSum - leftSum) === 1) return 1;
    return 0;
}
function countValidSelections(nums: number[]): number {
    let selection = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            selection += simulation(nums, i);
        }
    }
    return selection;
};