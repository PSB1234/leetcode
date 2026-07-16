// Last updated: 16/7/2026, 9:18:08 pm
function kClosest(points: number[][], k: number): number[][] {
    return points
        .map(p => [p, p[0] * p[0] + p[1] * p[1]] as [number[], number])
        .sort((a, b) => a[1] - b[1])
        .slice(0, k)
        .map(p => p[0]);
};