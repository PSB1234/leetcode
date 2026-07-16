// Last updated: 16/7/2026, 9:19:34 pm
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

function kthSmallest(root: TreeNode | null, k: number): number {
    let num: number = -1;
    function dfs(root: TreeNode | null) {
        if (root === null) return;
        dfs(root.left);
        if (k !== 0) {
            num = root.val;
            k--;
        }
        dfs(root.right);
    }
    dfs(root);
    return num;
};