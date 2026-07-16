// Last updated: 16/7/2026, 9:16:45 pm
function countOperations(num1: number, num2: number): number {
    let step = 0;
    while (num1 !== 0 && num2 !== 0) {
        if (num1 >= num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
        step++;
    }
    return step;
};