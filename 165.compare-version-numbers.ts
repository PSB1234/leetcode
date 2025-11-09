/*
 * @lc app=leetcode id=165 lang=typescript
 *
 * [165] Compare Version Numbers
 */

// @lc code=start
function compareVersion(version1: string, version2: string): number {
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);
    const len = Math.max(v1.length, v2.length);
    for (let i = 0; i < len; i++) {
        const num1 = v1[i] || 0;
        const num2 = v2[i] || 0;
        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }
    return 0; 
};
// @lc code=end

