// Last updated: 16/7/2026, 9:18:50 pm
function pacificAtlantic(heights: number[][]): number[][] {
    const ans: number[][] = [];
    const pacific: Set<string> = new Set<string>();
    const atlantic: Set<string> = new Set<string>();
    const row = heights.length;
    const col = heights[0].length;
    function dfs(i: number, j: number, prevHeight: number, cache: Set<string>) {
        if (i < 0 || j < 0 || i >= row || j >= col || prevHeight > heights[i][j] || cache.has(`${i},${j}`)) return;
        cache.add(`${i},${j}`);
        dfs(i + 1, j, heights[i][j], cache);
        dfs(i, j + 1, heights[i][j], cache);
        dfs(i - 1, j, heights[i][j], cache);
        dfs(i, j - 1, heights[i][j], cache);

    }
    for (let i = 0; i < col; i++) {
        dfs(0, i, heights[0][i], pacific);
        dfs(row - 1, i, heights[row - 1][i], atlantic);

    }
    for (let j = 0; j < row; j++) {
        dfs(j, 0, heights[j][0], pacific);
        dfs(j, col - 1, heights[j][col - 1], atlantic);
    }
    for (let k = 0; k < row; k++) {
        for (let l = 0; l < col; l++) {
            if (pacific.has(`${k},${l}`) && atlantic.has(`${k},${l}`)) {
                ans.push([k, l]);
            }
        }
    }
    return ans;
};