// Last updated: 16/7/2026, 9:20:02 pm
function reverseBits(n: number): number {
    const signed_int = n.toString(2);
    let start = '';
    while (signed_int.length + start.length < 32) {
        start += '0';
    }
    const c = start + signed_int;
    return parseInt(c.split("").reverse().join(""), 2);
};