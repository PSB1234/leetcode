// Last updated: 16/7/2026, 9:18:07 pm
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

