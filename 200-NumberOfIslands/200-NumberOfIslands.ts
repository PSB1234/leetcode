// Last updated: 16/7/2026, 9:20:00 pm
function numIslands(grid: string[][]): number {
    let islands = 0;
    function dfs(i: number, j: number) {
        if (
            i < 0 ||
            i >= grid.length ||
            j < 0 ||
            j >= grid[0].length ||
            grid[i][j] === '0'
        ) return;

        grid[i][j] = '0';
        dfs(i + 1, j);
        dfs(i, j + 1);
        dfs(i - 1, j);
        dfs(i, j - 1);
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                dfs(i, j);
                islands++;
            }
        }
    }
    return islands;
};
