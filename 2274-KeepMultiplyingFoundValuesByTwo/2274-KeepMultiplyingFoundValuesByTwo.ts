// Last updated: 16/7/2026, 9:16:46 pm
function findFinalValue(nums: number[], original: number): number {
    const numSet = new Set(nums);
    while (true) {
        if (numSet.has(original)) {
            original *= 2;
        } else {
            break;
        }
    }
    return original;
};