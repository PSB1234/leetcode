/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
 */

// @lc code=start
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
        if (k !== 0) {
            dfs(root.left);
        }
        num = root.val;
        k--;
        if (k !== 0) {
            dfs(root.right);
        }
    }
    dfs(root);
    return num;
};
// @lc code=end

