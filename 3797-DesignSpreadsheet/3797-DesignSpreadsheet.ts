// Last updated: 16/7/2026, 9:15:50 pm
class Spreadsheet {
    private sheets:Map<string, Array<number>> = new Map();

    constructor(rows: number) {
        
        for (let i = 65; i <= 90; i++) { 
            this.sheets.set(String.fromCharCode(i), new Array(rows).fill(0));
        }
        
    }

    setCell(cell: string, value: number): void {
        const column:string = cell[0];
        const row:number = Number(cell.slice(1))-1;
        let tempArray:Array<number> = this.sheets.get(column)!;
        tempArray[row] = value;
        this.sheets.set(column,tempArray);    }

    resetCell(cell: string): void {
        this.setCell(cell,0);
    }
    private getCell(cell:string):number{
        const column:string = cell[0];
        const row:number = Number(cell.slice(1))-1;
        const tempArray = this.sheets.get(column);
        if(tempArray === undefined) return 0;
        const tempValue = tempArray[row];
        return tempValue;
    }
    getValue(formula: string): number {
        const [temp,right] = formula.split('+');
        const left = temp.slice(1);
        let a:number,b:number;
        if(isNaN(parseFloat(left))){
            a = this.getCell(left);
        }else{
            a= Number(left);
        }
         if(isNaN(parseFloat(right))){
            b = this.getCell(right);
        }else{
            b = Number(right);
        }
        return a+b;
    }
}

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */