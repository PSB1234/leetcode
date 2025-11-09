/*
 * @lc app=leetcode id=1518 lang=typescript
 *
 * [1518] Water Bottles
 */

// @lc code=start
function numWaterBottles(numBottles: number, numExchange: number): number {
    const remaining_bottles = numBottles % numExchange; //3
    const exchanged_bottles = Math.floor(numBottles / numExchange); //3
    while (numBottles < remaining_bottles + exchanged_bottles) {
        numBottles = exchanged_bottles + remaining_bottles;
    }
};
// @lc code=end

