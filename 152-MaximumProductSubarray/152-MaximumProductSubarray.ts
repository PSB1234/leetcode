// Last updated: 16/7/2026, 9:20:13 pm
function maxProduct(nums: number[]): number {
    let andmax = -Infinity;
    let currMax = 1;
    let currMin = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            currMax = 1;
            currMin = 1;
        }
        const max = currMax;
        currMax = Math.max(currMax * nums[i], nums[i], currMin * nums[i]);
        currMin = Math.min(max * nums[i], nums[i], currMin * nums[i]);
        andmax = Math.max(andmax, currMax, currMin);
    }
    return andmax;
};
maxProduct([-2, 0, -1])