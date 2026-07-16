// Last updated: 16/7/2026, 9:18:10 pm
function orangesRotting(grid: number[][]): number {
    let ansTime = 0;
    const rowLimit = grid.length;
    const colLimit = grid[0].length;
    const dir: [addrow: number, addcol: number][] = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const res = [];
    const queue: [number, number][] = [];
    let fresh = 0;
    for (let i = 0; i < rowLimit; i++) {
        for (let j = 0; j < colLimit; j++) {
            if (grid[i][j] === 2) queue.push([i, j]);
            if (grid[i][j] === 1) fresh++;
        }
    }

    while (queue.length > 0 && fresh > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const ele = queue.shift()!;
            res.push(ele);
            grid[ele[0]][ele[1]] = 0;
            for (const [addrow, addcol] of dir) {
                const newRow = ele[0] + addrow;
                const newCol = ele[1] + addcol;
                if (
                    newRow >= 0 &&
                    newCol >= 0 &&
                    newRow < rowLimit &&
                    newCol < colLimit &&
                    grid[newRow][newCol] === 1
                ) {
                    grid[newRow][newCol] = 0;
                    queue.push([newRow, newCol]);
                    fresh--;
                }
            }
        }
        ansTime++;

    }
    return fresh === 0 ? ansTime : -1;

};