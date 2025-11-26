/*
 * @lc app=leetcode id=424 lang=typescript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
    const map = new Map<string, number>();
    let left = 0;
    let right = 0;
    let max_freq = 0;
    while (right < s.length) {
        if (map.get(s[right]) !== undefined) {
            map.set(s[right], map.get(s[right])! + 1);
        } else {
            map.set(s[right], 1);
        }
        max_freq = Math.max(max_freq, map.get(s[right])!);
        const condition = (right - left) - max_freq;
        if (condition <= k) {
            right++;
        } else {
            left++;

        }

    }
    return max_freq;
};
characterReplacement("ABAB", 2);
// @lc code=end

