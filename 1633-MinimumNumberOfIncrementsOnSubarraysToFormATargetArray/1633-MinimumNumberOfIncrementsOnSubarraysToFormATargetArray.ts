// Last updated: 16/7/2026, 9:17:35 pm
function minNumberOperations(target: number[]): number {
    let result = target[0];
    for (let i = 1; i < target.length; i++) {
        if (target[i - 1] < target[i]) {
            result += target[i] - target[i - 1];
        }
    }
    return result;
};