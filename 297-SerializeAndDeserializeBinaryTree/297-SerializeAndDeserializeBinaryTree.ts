// Last updated: 16/7/2026, 9:19:14 pm
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


/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    const res: string[] = [];

    function dfs(node: TreeNode | null) {
        if (node === null) {
            res.push("#");
            return;
        }
        res.push(String(node.val));
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return res.join(',');
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    if (!data) return null;
    const preorder = data.split(',');
    function genrateTree(preorder: string[]): TreeNode | null {
        if (preorder.length === 0) return null;
        const value = preorder.shift();
        if (value === "#") return null;
        const root = new TreeNode(Number(value));
        root.left = genrateTree(preorder)
        root.right = genrateTree(preorder);
        return root;
    }
    return genrateTree(preorder);
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */