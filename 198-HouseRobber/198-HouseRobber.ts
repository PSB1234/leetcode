// Last updated: 16/7/2026, 9:20:05 pm
function rob(nums: number[]): number {
    const ans: number[] = [];
    ans.push(0);
    ans.push(nums[0]);
    for (let i = 2; i <= nums.length; i++) {
        const a= ans[i - 1];
        const b= ans[i - 2] + nums[i-1];
        ans.push(Math.max(a,b));
    }
    return ans[nums.length];
};
rob([1,2,3,1])