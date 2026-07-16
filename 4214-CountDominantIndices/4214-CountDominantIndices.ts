// Last updated: 16/7/2026, 9:15:38 pm
function calAvg(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function dominantIndices(nums: number[]): number {
    let avg = nums[nums.length - 1];
    let count = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] > avg) count++;
        avg = calAvg(nums.slice(i, nums.length));
    }
    return count;
};