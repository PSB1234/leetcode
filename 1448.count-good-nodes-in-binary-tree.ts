/*
 * @lc app=leetcode id=1448 lang=typescript
 *
 * [1448] Count Good Nodes in Binary Tree
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

function goodNodes(root: TreeNode | null): number {
    let count = 0;
    function dfs(root: TreeNode | null, prev: number) {
        if (root === null) return;
        if (root.val >= prev) {
            prev = root.val;
            count++;
        }
        dfs(root.left, prev);
        dfs(root.right, prev);
    }
    dfs(root, -(10 ** 4));
    return count;
};
// @lc code=end

