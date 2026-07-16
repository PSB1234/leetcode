// Last updated: 16/7/2026, 9:19:25 pm
function maxSlidingWindow(nums: number[], k: number): number[] {
    const queue: number[] = [];
    const ans: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i]) {
            queue.pop();
        }
        queue.push(i);

        if (queue[0] <= i - k) {
            queue.shift();
        }

        if (i >= k - 1) {
            ans.push(nums[queue[0]]);
        }
    }

    return ans;
};