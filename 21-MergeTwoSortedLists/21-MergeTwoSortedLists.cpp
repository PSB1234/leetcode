// Last updated: 16/7/2026, 9:21:57 pm
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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    ListNode* merged = new ListNode();
    ListNode* currentNode = merged;

    while (list1 != nullptr || list2 != nullptr) {
        if (list1 != nullptr && (list2 == nullptr || list1->val <= list2->val)) {
            currentNode->next = list1;
            list1 = list1->next;
        } else {
            currentNode->next = list2;
            list2 = list2->next;
        }
        currentNode = currentNode->next;
    }

    ListNode* result = merged->next;
    delete merged;
    return result;


    }
};