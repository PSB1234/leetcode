// Last updated: 16/7/2026, 9:21:38 pm
function checkColumnOrRow(arr: string[]): boolean {
    const set = new Set<string>();
    for (const val of arr) {
        if (val === '.') continue; // ignore empty cells
        if (set.has(val)) return false;
        set.add(val);
    }
    return true;
}

function isValidSudoku(board: string[][]): boolean {
    // check rows
    for (const row of board) {
        if (!checkColumnOrRow(row)) return false;
    }

    // check columns
    for (let i = 0; i < 9; i++) {
        const col: string[] = [];
        for (let j = 0; j < 9; j++) {
            col.push(board[j][i]);
        }
        if (!checkColumnOrRow(col)) return false;
    }

    // check 3x3 sub-boxes
    for (let br = 0; br < 9; br += 3) {
        for (let bc = 0; bc < 9; bc += 3) {
            const box: string[] = [];
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    box.push(board[br + r][bc + c]);
                }
            }
            if (!checkColumnOrRow(box)) return false;
        }
    }

    return true;
}
