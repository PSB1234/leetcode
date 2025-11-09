/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
 */

// @lc code=start

// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }


function inorderTraversal(root: TreeNode | null): number[] {
    const main: number[] = new Array();
    if (root) return [];
    const left: number[] = inorderTraversal(root!.left);
    main.push(...left)
    main.push(root!.val);
    const right: number[] = inorderTraversal(root!.right);
    main.push(...right)
    return main;

};
// @lc code=end

