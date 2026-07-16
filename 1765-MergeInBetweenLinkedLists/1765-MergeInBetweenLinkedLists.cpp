// Last updated: 16/7/2026, 9:17:27 pm
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
    ListNode* mergeInBetween(ListNode* list1, int a, int b, ListNode* list2) {
        ListNode *A = list1;
        ListNode *C = list2;
        for(int i = 0;i<a-1;i++)
        {
            A = A->next;
        }
        ListNode *B = A->next;
        for(int j = 0;j<b-a;j++)
        {
            B = B->next;
        }
            A->next = list2;
            while (C->next)
            {
                C = C->next;
            }
            C->next = B->next;
        return list1;}

};