// Last updated: 16/7/2026, 9:21:28 pm
function solveNQueens(n: number): string[][] {
    const ans:string[][] = [];
    function isQueenSafe(row:number,col:number,board:string[][]):boolean{
        for(let i = 0;i<n;i++){
            if(board[i][col] === 'Q'){
                return false;
            }
        }
        for (let i = row-1,  j = col-1; i >= 0 && j >= 0; i--, j--)
            if (board[i][j]=== 'Q')
                return false;
    
        for (let i = row-1,  j = col+1; j < n && i >= 0; i--, j++)
            if (board[i][j]=== 'Q')
                return false;
        return true;
    }
   const board:string[][] =  Array(n).fill(null).map(() => Array(n).fill('.'));
   function generate(row:number){
    if(row === n){
        ans.push(board.map(row => row.join('')));
        return;
    }
    for(let i  = 0;i<n;i++){
        if(isQueenSafe(row,i,board)){
            board[row][i] = 'Q';
            generate(row + 1);
            board[row][i] = '.';        
        }
    }
   }
generate(0);

    return ans;
};