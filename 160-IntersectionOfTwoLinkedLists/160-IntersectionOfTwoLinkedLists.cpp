// Last updated: 16/7/2026, 9:20:10 pm
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode* l1 = headA;
    ListNode* l2 = headB;

    while (l1 != l2) {
        l1 = (l1 != nullptr) ? l1->next : headB;
        l2 = (l2 != nullptr) ? l2->next : headA;
    }

    return l1;
    }
};