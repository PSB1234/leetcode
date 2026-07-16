// Last updated: 16/7/2026, 9:17:40 pm
function shuffle(nums: number[], n: number): number[] {

    const ans = [];

    for (let i = 0; i < n; i++) {

        ans.push(nums[i]);

        ans.push(nums[i + n]);

    }

    return ans;

};