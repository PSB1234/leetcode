// Last updated: 16/7/2026, 9:18:01 pm
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* helper(string traversal, int depth, int size, int& index) {
        int curDepth = 0;
        if (index >= size)
            return nullptr;
        while (index < size && traversal[index] == '-') {
            index++;
            curDepth++;
        }

        if (curDepth != depth) {
            index -= curDepth; 
            return nullptr;
        }

        int num = 0;
        while (index < size && isdigit(traversal[index])) {
            num = num * 10 + (traversal[index] - '0');
            index++;
        }

        TreeNode* node = new TreeNode(num);

        node->left = helper(traversal, depth + 1, size, index);
        node->right = helper(traversal, depth + 1, size, index);

        return node;
    }
    TreeNode* recoverFromPreorder(string traversal) {
        int n = traversal.size();
        int index = 0;
        int depth = 0;
        return helper(traversal, depth, n, index);
    }
};