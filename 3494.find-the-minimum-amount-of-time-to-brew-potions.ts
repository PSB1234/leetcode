/*
 * @lc app=leetcode id=3494 lang=typescript
 *
 * [3494] Find the Minimum Amount of Time to Brew Potions
 */

// @lc code=start
function minTime(skill: number[], mana: number[]): number {
    let prevTime = 0;
    const wizards = skill.length;
    const potions = mana.length;
    const dpMatrix: number[][] = []
    for (let i = 0; i < skill.length; i++) {
        let currentTime = mana[0] * skill[i];
        dpMatrix[0].push(prevTime + currentTime);
        prevTime += currentTime;
    }
    for (let i = 1; i < dpMatrix.length; i++) {
        for (let j = 0; j < dpMatrix[0].length; j++) {
            dpMatrix[i][j] = dpMatrix[i - 1][j] + mana[0] * skill[i];
        }
    }
    for (let i = wizards - 2; i >= 0; i--) {

    }
    return -1;
};
minTime([1, 5, 2, 4], [5, 1, 4, 2])
// @lc code=end

