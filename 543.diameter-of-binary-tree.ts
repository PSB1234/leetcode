/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (root === null) return 0;
    function getHeight(root: TreeNode | null): number {
        if (root === null) return 0;
        return 1 + Math.max(getHeight(root.left), getHeight(root.right));

    }
    const left = getHeight(root.left);
    const right = getHeight(root.right);
    const ldiameter = diameterOfBinaryTree(root.left);
    const rdiameter = diameterOfBinaryTree(root.right);
    return Math.max(left + right, ldiameter, rdiameter)
};
// @lc code=end

