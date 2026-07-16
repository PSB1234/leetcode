// Last updated: 16/7/2026, 9:21:26 pm
function canJump(nums: number[]): boolean {
    const ans: boolean[] = new Array<boolean>(nums.length).fill(false);
    ans[nums.length - 1] = true;
    for (let i = nums.length - 2; i >= 0; i--) {
        const start = i + 1;
        const jumpLimit = i + nums[i];
        const jumpRange = Math.min(nums.length - 1, jumpLimit);
        for (let j = start; j <= jumpRange; j++) {
            if (ans[j] === true) {
                ans[i] = true;
            }
        }
    }
    return ans[0];
};
