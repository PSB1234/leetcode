// Last updated: 16/7/2026, 9:18:25 pm
function nextGreatestLetter(letters: string[], target: string): string {
    let left = 0;
    let right = letters.length - 1;
    let middle = Math.floor((left + right) / 2);
    while (left < right) {
        middle = Math.floor((left + right) / 2);
        if (target.charCodeAt(0) < letters[middle].charCodeAt(0)) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return (target.charCodeAt(0) < letters[right].charCodeAt(0)) ? letters[right] : letters[0];
};
