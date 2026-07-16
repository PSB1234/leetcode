// Last updated: 16/7/2026, 9:21:03 pm
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
    ListNode* partition(ListNode* head, int x) {
            if (!head) return head;
    auto* greaterList = new ListNode(-1, nullptr);
    auto* lesserList = new ListNode(-1, nullptr);
    ListNode* gHead = greaterList;
    ListNode* lHead = lesserList;
    ListNode* check = head;
    while (check != nullptr) {
        if (x <= check->val) {
            greaterList->next = check;
            greaterList = greaterList->next;
        } else {
            lesserList->next = check;
            lesserList =lesserList->next;
        }
            check = check->next;
    }
    greaterList->next = nullptr;
    lesserList->next = gHead->next;
    ListNode* newHead = lHead->next;
    delete lHead;
    delete gHead;
    return newHead;
    }
};