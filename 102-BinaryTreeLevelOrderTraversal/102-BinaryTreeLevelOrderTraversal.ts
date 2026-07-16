// Last updated: 16/7/2026, 9:20:49 pm
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

function levelOrder(root: TreeNode | null): number[][] {
    const queue: number[][] = [];
    function levelOrder(root: TreeNode | null, level: number) {
        if (root === null) return;

        if (queue.length <= level)
            queue.push([]);

        queue[level].push(root.val);

        levelOrder(root.left, level + 1);
        levelOrder(root.right, level + 1);
    }
    levelOrder(root, 0);
    return queue;
};