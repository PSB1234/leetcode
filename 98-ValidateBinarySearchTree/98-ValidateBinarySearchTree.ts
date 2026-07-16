// Last updated: 16/7/2026, 9:20:53 pm
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
    function dfs(root: TreeNode | null, lower: number, upper: number): boolean {
        if (root === null) return true;
        if (root.val <= lower || root.val >= upper) return false;
        return dfs(root.left, lower, Math.min(root.val, upper)) && dfs(root.right, Math.max(lower, root.val), upper);
    }
    return dfs(root, -Infinity, Infinity);
};