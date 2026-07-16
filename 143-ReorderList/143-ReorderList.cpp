// Last updated: 16/7/2026, 9:20:26 pm
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
    void reorderList(ListNode* head) {
         if (!head || !head->next || !head->next->next) return;
        ListNode* slow = head;
        ListNode* fast = head;
        while (fast->next != nullptr && fast->next->next!=nullptr) {
            slow = slow->next;
            fast = fast->next->next;
        }
        ListNode* nextHalf = slow->next;
        slow->next =nullptr;   
        ListNode* prev = nullptr;
        while (nextHalf!=nullptr)
        {
            ListNode* nextNode = nextHalf->next;
            nextHalf->next = prev;
            prev = nextHalf;
            nextHalf = nextNode;
        }
        ListNode* firsthalf = head;
        while (prev)
        {
            ListNode* nextptr = firsthalf->next;
            ListNode* prevptr  = prev->next;
            firsthalf->next = prev;
            prev->next = nextptr;
            firsthalf = nextptr;
            prev  = prevptr;
        }
    }
};