/*
 * @lc app=leetcode id=3005 lang=typescript
 *
 * [3005] Count Elements With Maximum Frequency
 */

// @lc code=start
function maxFrequencyElements(nums: number[]): number {
    let map = new Map<number, number>();
    let maxFreq = 0;
    for (let num of nums) {
        let freq = (map.get(num) || 0) + 1;
        map.set(num, freq);
        maxFreq = Math.max(maxFreq, freq);
    }
    let count = 0;
    for (let freq of map.values()) {
        if (freq === maxFreq) {
            count++;
        }
    }
    return count*maxFreq;
};
// @lc code=end

