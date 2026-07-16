// Last updated: 16/7/2026, 9:19:31 pm
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    bool isPalindrome(ListNode* head) {
       std::stack<int> s;
    ListNode* d = head;

    while (d != nullptr) {
        s.push(d->val);
        d = d->next;
    }

    d = head;

    while (d != nullptr) {
        if (d->val != s.top()) {
            return false;
        }
        s.pop();
        d = d->next;
    }

    return true;
    }
};