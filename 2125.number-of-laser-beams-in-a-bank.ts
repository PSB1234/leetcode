/*
 * @lc app=leetcode id=2125 lang=typescript
 *
 * [2125] Number of Laser Beams in a Bank
 */

// @lc code=start
function countSecurityCameras(tiles: string): number {
    return tiles.replaceAll("0", "").length;
}
function numberOfBeams(bank: string[]): number {
    let totalBeams: number = 0;
    let left: number = 0;
    let right: number = 0;
    let leftValue: number = 0;
    let rightValue: number = 0;

    while (left < bank.length && right < bank.length) {
        leftValue = countSecurityCameras(bank[left]);
        rightValue = countSecurityCameras(bank[right]);
        if (left === right || rightValue === 0) {
            right++;
        } else if (leftValue === 0) {
            left++;
        } else if (rightValue !== 0) {
            totalBeams += leftValue * rightValue;
            left = right;
            right++;
        } else {
            left++;
        }
    }

    return totalBeams;
};

// @lc code=end

