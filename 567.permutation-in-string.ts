/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
        [s1, s2] = [s2, s1]
    }
    const s1Map = new Map<string, number>();
    for (let i = 0; i < s1.length; i++) {
        s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
    }
    for (let j = 0; j < s2.length; j++) {
        const value = s1Map.get(s2[j]);
        if (value !== undefined) {
            s1Map.set(s2[j], value - 1);
        }
    }
    for (let i = 0; i < s1.length; i++) {
        const value = s1Map.get(s1[i]);
        if (value === undefined) {
            return false;
        } else {
            if (value > 0) {
                return false;
            }
        }
    }
    return true;

};
checkInclusion("ab", "eidboaoo");
// @lc code=end

