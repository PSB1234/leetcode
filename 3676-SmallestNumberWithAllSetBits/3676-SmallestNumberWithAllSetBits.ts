// Last updated: 16/7/2026, 9:15:52 pm
function smallestNumber(n: number): number {
    return parseInt((n >>> 0).toString(2).replaceAll("0", "1"), 2);
};