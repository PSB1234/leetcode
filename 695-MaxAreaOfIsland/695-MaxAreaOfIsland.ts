// Last updated: 16/7/2026, 9:18:31 pm
function maxAreaOfIsland(grid: number[][]): number {
    let maxArea = 0;
    let count = 0;
    const rowLimit = grid.length;
    const colLimit = grid[0].length;
    function visitTheIsland(row: number, col: number) {
        if (row < 0 || col < 0 || row >= rowLimit || col >= colLimit || grid[row][col] === 0) return;
        count++;
        grid[row][col] = 0;
        visitTheIsland(row + 1, col);
        visitTheIsland(row, col + 1);
        visitTheIsland(row - 1, col);
        visitTheIsland(row, col - 1);
    }
    for (let i = 0; i < rowLimit; i++) {
        for (let j = 0; j < colLimit; j++) {
            if (grid[i][j] === 1) {
                visitTheIsland(i, j);
                maxArea = Math.max(maxArea, count);
                count = 0;
            }
        }
    }
    return maxArea;
};
