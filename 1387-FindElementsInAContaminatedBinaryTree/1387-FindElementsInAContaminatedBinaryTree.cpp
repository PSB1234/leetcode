// Last updated: 16/7/2026, 9:17:51 pm
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
class FindElements {
private:
    unordered_set<int> pusher;
public:
    void createTree(TreeNode* root,int val,unordered_set<int>& pusher) {
        if (!root) return;
        root->val = val;
        pusher.insert(val);
        if (root->left) {
            createTree(root->left,2 * val + 1,pusher);
        }
        if (root->right) {
            createTree(root->right,2 * val + 2,pusher);
        }
    }
     FindElements(TreeNode* root) {
        createTree(root,0,pusher);
    }

    bool find(int target) {
        return  pusher.contains(target);
    }
};
/**
 * Your FindElements object will be instantiated and called as such:
 * FindElements* obj = new FindElements(root);
 * bool param_1 = obj->find(target);
 */