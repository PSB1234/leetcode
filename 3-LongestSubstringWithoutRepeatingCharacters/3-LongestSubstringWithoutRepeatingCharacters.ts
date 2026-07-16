// Last updated: 16/7/2026, 9:22:10 pm
function lengthOfLongestSubstring(s: string): number {
    const set = new Set<string>();
    let left = 0;
    let right = 0;
    let max = 0;
    while (right < s.length) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++
        }
        set.add(s[right]);
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
};