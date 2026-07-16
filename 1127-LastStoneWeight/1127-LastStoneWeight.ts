// Last updated: 16/7/2026, 9:18:00 pm
function lastStoneWeight(stones: number[]): number {
    let sortedStones = stones.sort((a, b) => a - b);
    while (sortedStones.length > 1) {
        let maxElement = sortedStones.pop();
        let secondMaxElement = sortedStones.pop();
        let diff = maxElement - secondMaxElement;
        if (diff > 0) {
            sortedStones.push(diff);
            sortedStones.sort((a,b)=> a-b);

        }
    }
    return sortedStones.pop() || 0
};