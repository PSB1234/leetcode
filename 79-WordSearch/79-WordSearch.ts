// Last updated: 16/7/2026, 9:21:09 pm

function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;
    function checkSides(i:number,j:number,k:number):boolean{
        if (k === word.length) return true;
        if(i<0||j<0||i>=rows||j>=cols || board[i][j]!== word[k]) return false;
        const temp = board[i][j];
        board[i][j] = '#';
        const found = checkSides(i+1,j,k+1)||
        checkSides(i-1,j,k+1)||
        checkSides(i,j+1,k+1)||
        checkSides(i,j-1,k+1)
        board[i][j] = temp;
        return found;
    }
    for(let i = 0;i<board.length;i++){
        for(let j = 0;j<board[0].length;j++){
            if(checkSides(i,j,0)) return true;
        }
    }
    return false;
};
