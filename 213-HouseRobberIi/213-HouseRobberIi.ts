// Last updated: 16/7/2026, 9:19:43 pm
function rob(nums: number[]): number {
    if (nums.length < 2) return nums[0];
    function robHelper(nums: number[]): number {
        let robber1 = 0;
        let robber2 = 0;
        for (let num of nums) {
            let temp = Math.max(robber1 + num, robber2)
            robber1 = robber2;
            robber2 = temp;
        }
        return robber2;
    };
    const arr1 = nums.slice(1);
    const arr2 = nums.slice(0,nums.length-1);
    return Math.max(robHelper(arr1),robHelper(arr2));
};