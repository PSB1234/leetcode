// Last updated: 16/7/2026, 9:16:52 pm
function countSecurityCameras(tiles: string): number {
    return tiles.replaceAll("0", "").length;
}
function numberOfBeams(bank: string[]): number {
    let totalBeams: number = 0;
    let left: number = 0;
    let right: number = 0;
    let leftValue: number = 0;
    let rightValue: number = 0;

    while (left < bank.length && right < bank.length) {
        leftValue = countSecurityCameras(bank[left]);
        rightValue = countSecurityCameras(bank[right]);
        if (left === right || rightValue === 0) {
            right++;
        } else if (leftValue === 0) {
            left++;
        } else if (rightValue !== 0) {
            totalBeams += leftValue * rightValue;
            left = right;
            right++;
        } else {
            left++;
        }
    }

    return totalBeams;
};
