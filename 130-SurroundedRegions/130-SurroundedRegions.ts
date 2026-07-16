// Last updated: 16/7/2026, 9:20:35 pm
/**
 Do not return anything, modify board in-place instead.
 */

function solve(board: string[][]): void {
    const rows = board.length;
    const cols = board[0].length;
    if (rows === 0 || cols === 0) { return; }
    
    for (let i = 0; i < rows; i++) {
        dfs(board, i, 0);
        dfs(board, i, cols - 1);
    }
    for (let j = 0; j < cols; j++) {
        dfs(board, 0, j);
        dfs(board, rows - 1, j);
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            }
            else if (board[i][j] === '#') {
                board[i][j] = 'O';
            }
        }
    }
    
    function dfs(board: string[][], i: number, j: number): void {
        const rows = board.length;
        const cols = board[0].length;
        
        if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] != 'O') {
            return;
        }
        board[i][j] = '#';
        
        dfs(board, i + 1, j);
        dfs(board, i - 1, j);
        dfs(board, i, j + 1);
        dfs(board, i, j - 1);
    }    
};