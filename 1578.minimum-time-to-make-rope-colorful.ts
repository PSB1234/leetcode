/*
 * @lc app=leetcode id=1578 lang=typescript
 *
 * [1578] Minimum Time to Make Rope Colorful
 */

// @lc code=start
function minCost(colors: string, neededTime: number[]): number {
    let totalTime = 0;
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] == colors[i + 1]) {
            if (neededTime[i] < neededTime[i + 1]) {
                totalTime += neededTime[i];

            } else {
                totalTime += neededTime[i + 1];
                let temp = neededTime[i + 1];
                neededTime[i + 1] = neededTime[i];
                neededTime[i] = temp;
            }
        }
    }
    return totalTime;
};
// @lc code=end

