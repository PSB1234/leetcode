// Last updated: 16/7/2026, 9:19:35 pm
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
         if(!root) return nullptr;
     TreeNode* mleft = invertTree(root->right);
     TreeNode* mright = invertTree(root->left);
     root->left = mleft;
     root->right= mright;
     return root;
    }
};