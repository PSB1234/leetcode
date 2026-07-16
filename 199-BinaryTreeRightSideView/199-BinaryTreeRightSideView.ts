// Last updated: 16/7/2026, 9:19:55 pm
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

function rightSideView(root: TreeNode | null): number[] {
    const queue: number[][] = [];
    function iterator(root: TreeNode | null, level: number): void {
        if (root === null) return;
        if (queue.length <= level)
            queue.push([]);
        queue[level].push(root.val);
        iterator(root.left, level + 1);
        iterator(root.right, level + 1);
    }
    iterator(root, 0);
    const ans: number[] = [];
    for (let i = 0; i < queue.length; i++) {
        ans.push(queue[i][queue[i].length - 1]);
    }
    return ans;
};