// Last updated: 16/7/2026, 9:15:53 pm
function multiplyDigits(n: number): number {
    let ans: number = 1;
    while (n > 0) {
        ans *= n % 10;
        n = Math.floor(n / 10);
    }
    return ans;
}
function smallestNumber(n: number, t: number): number {
    while (n <= 100) {
        if (multiplyDigits(n) % t === 0) {
            return n;
        } else {
            n++;
        }
    }
    return n;
};