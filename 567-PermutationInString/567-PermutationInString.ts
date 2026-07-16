// Last updated: 16/7/2026, 9:18:42 pm
function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;
    const s1_map = new Map<string, number>();
    for (const ch of s1) {
        s1_map.set(ch, (s1_map.get(ch) || 0) + 1);
    }
    let left = 0;
    let right = 0;
    let needed = s1.length;
    while (right < s2.length) {
        const char = s2[right];
        if (s1_map.has(char)) {
            if (s1_map.get(char)! > 0) {
                needed--;
            }
            s1_map.set(char, s1_map.get(char)! - 1);
        }
        right++;
        if (right - left > s1.length) {
            const leftChar = s2[left];

            if (s1_map.has(leftChar)) {
                if (s1_map.get(leftChar)! >= 0) {
                    needed++;
                }
                s1_map.set(leftChar, s1_map.get(leftChar)! + 1);
            }
            left++;
        }
        if (needed === 0) {
            return true;
        }
    }
    return false;
};