// Last updated: 16/7/2026, 9:21:22 pm
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
    ListNode* rotateRight(ListNode* head, int k) {
     if(k==0 || head == nullptr){
      return head;
    }
    ListNode *temp = head;
    int length = 1;
    while (temp->next != nullptr)
    {
      temp = temp->next;
      length++;
    } 
    temp->next = head;

    int a = length - (k%length); 
    while(a--){
      temp = temp->next;
    }
    ListNode* ans = temp->next; 
    temp->next =nullptr;
    
  return ans;
    }
};