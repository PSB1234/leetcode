// Last updated: 16/7/2026, 9:17:28 pm
function minimumOneBitOperations(n: number): number {
    if (n === 0) return 0;
    let k = 0;
    while (2 ** k <= n) {
        k++;
    }
    k--;
    return (2 ** (k + 1) - 1) - minimumOneBitOperations(2 ** k ^ n);
};