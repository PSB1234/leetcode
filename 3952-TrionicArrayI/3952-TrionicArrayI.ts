// Last updated: 16/7/2026, 9:15:48 pm
function isTrionic(nums: number[]): boolean {
    let p = 0;
    let q = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] > nums[i]) {
            p = i - 1;
            break;
        } else if (nums[i - 1] === nums[i]) {
            return false;
        }
    }
    for (let j = p + 1; j < nums.length; j++) {
        if (nums[j - 1] < nums[j]) {
            q = j - 1;
            break;
        } else if (nums[j - 1] === nums[j]) {
            return false;
        }
    }
    for (let k = q + 1; k < nums.length; k++) {
        if (nums[k - 1] > nums[k]) {
            return false;
        } else if (nums[k - 1] === nums[k]) {
            return false;
        }
    }
    return p < q && p > 0 ? true : false;
};