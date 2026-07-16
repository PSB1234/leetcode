// Last updated: 16/7/2026, 9:17:41 pm
function kLengthApart(nums: number[], k: number): boolean {
    let last = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {

            if (i - last - 1 < k && last != -1) {
                return false;
            }
            last = i
        }

    }
    return true;
};