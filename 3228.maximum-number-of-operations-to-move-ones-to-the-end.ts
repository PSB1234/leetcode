/*
 * @lc app=leetcode id=3228 lang=typescript
 *
 * [3228] Maximum Number of Operations to Move Ones to the End
 */

// @lc code=start
function maxOperations(s: string): number {
    let count = 0;
    let op = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            count++;
        } else {
            op += count;
            count = 0;
        }
    }
    return op;
};
// @lc code=end

