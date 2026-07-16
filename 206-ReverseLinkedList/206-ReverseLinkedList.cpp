// Last updated: 16/7/2026, 9:19:51 pm
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
    ListNode* reverseList(ListNode* head) {
if (head == nullptr || head->next == nullptr)
        return head;
      ListNode* ptr = head;
      ListNode* prev = nullptr;
      ListNode* nptr = nullptr;
       
      while (ptr != nullptr)
      { nptr = ptr->next;
        ptr->next = prev;
        prev = ptr;
        ptr = nptr;
      }
      return prev;
    }
};