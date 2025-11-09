/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    const parenthesis: string[] = [];
    let stack: string[] = [];
    function backtrack(open: number, close: number): void {
        if (open === close && open === n) {
            parenthesis.push(stack.join(''));
            return;
        }
        if (open < n) {
            stack.push("(");
            backtrack(open + 1, close);
            stack.pop();
        }
        if (close < open) {
            stack.push(")");
            backtrack(open, close + 1);
            stack.pop();
        }
    }
    backtrack(0, 0);
    return parenthesis;
};
// @lc code=end

