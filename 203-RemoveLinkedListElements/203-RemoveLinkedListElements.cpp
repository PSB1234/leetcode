// Last updated: 16/7/2026, 9:19:53 pm
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
    ListNode* removeElements(ListNode* head, int val) {
        ListNode* fast = head;
        ListNode dummy(0);
        dummy.next = head;
        ListNode* slow = &dummy;
        while(fast!= nullptr){
            if (fast->val !=val){
                slow =fast;
                fast = fast->next;
            }else{
                slow->next = fast->next;
                fast = slow->next;
            }
        }
    return dummy.next;
    }
};