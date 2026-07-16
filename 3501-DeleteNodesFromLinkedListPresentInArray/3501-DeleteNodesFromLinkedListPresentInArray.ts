// Last updated: 16/7/2026, 9:15:57 pm
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const toDelete = new Set(nums);

    // Handle nodes at the start that should be removed
    while (head && toDelete.has(head.val)) {
        head = head.next;
    }

    let ptr = head;
    while (ptr && ptr.next) {
        if (toDelete.has(ptr.next.val)) {
            ptr.next = ptr.next.next;
        } else {
            ptr = ptr.next;
        }
    }

    return head;
};