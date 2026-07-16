// Last updated: 16/7/2026, 9:16:10 pm
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
    ListNode* insertGreatestCommonDivisors(ListNode* head) {
              ListNode*d = head;
        while(d !=nullptr && d->next!=nullptr){
            ListNode* newList = new ListNode(__gcd(d->val,d->next->val));
            newList->next = d->next;
            d->next = newList;
            d=d->next->next;
        }
        return head;
    }
};