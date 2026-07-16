// Last updated: 16/7/2026, 9:21:48 pm
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
    ListNode* swapPairs(ListNode* head) {
        if(!head || !head->next) return head;
        ListNode* forward = head;
        ListNode* dummy = new ListNode();
        ListNode* backward = dummy;


        while(forward!= nullptr && forward->next != nullptr ){
            backward->next = forward->next;
            forward ->next =backward->next->next;
            backward->next->next = forward;
            backward = forward;
            forward = forward->next;
        }
        return dummy->next;
    }
};