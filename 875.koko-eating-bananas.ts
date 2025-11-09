/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
function checkBananaSpeed(piles: number[], speed: number): number {
    let k = 0;
    for (let i = 0; i < piles.length; i++) {
        k += Math.ceil(piles[i] / speed);
    }
    return k;
}
function minEatingSpeed(piles: number[], h: number): number {
    let maxSpeed = Math.max(...piles);
    let minSpeed = 1;
    let middle = 0;
    while (minSpeed <= maxSpeed) {
        middle = minSpeed + Math.floor((maxSpeed - minSpeed) / 2);
        const time = checkBananaSpeed(piles, middle);
        if (time <= h) {
            maxSpeed = middle - 1;
        } else if (time > h) {
            minSpeed = middle + 1;
        }

    }
    return minSpeed;
};

// @lc code=end

