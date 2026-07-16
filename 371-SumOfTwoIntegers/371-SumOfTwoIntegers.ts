// Last updated: 16/7/2026, 9:18:59 pm
function getSum(a: number, b: number): number {
    while(b!=0){
        const tmp = (a&b)<<1;
        a = a^b;
        b=tmp;
    }
    return a;
};