// Last updated: 16/7/2026, 9:21:54 pm
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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* temp = head;
        int c = 0;
        while(temp!= nullptr){
            c++;
            temp=temp->next;
        }
        c = c-n;
        if (c == 0) {
        ListNode* newHead = head->next;
        delete head;
        return newHead;
        }else{

        }
        ListNode* fast = head;
        while(fast!= nullptr && c-- > 1){
            fast =fast->next;
        }

        if (fast != nullptr && fast->next != nullptr) {
        ListNode* nodeToDelete = fast->next;
        fast->next = fast->next->next;
        delete nodeToDelete;
        }
        return head;
    }
};