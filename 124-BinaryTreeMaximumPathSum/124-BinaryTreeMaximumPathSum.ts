// Last updated: 16/7/2026, 9:20:39 pm
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

function maxPathSum(root: TreeNode | null): number {
    let max = -Infinity;

    function dfs(node: TreeNode | null): number {
        if (node === null) return 0;

        const leftGain = Math.max(0, dfs(node.left));
        const rightGain = Math.max(0, dfs(node.right));

        max = Math.max(max, node.val + leftGain + rightGain);

        return node.val + Math.max(leftGain, rightGain);
    }

    dfs(root);
    return max;


};