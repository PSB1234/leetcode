// Last updated: 16/7/2026, 9:21:53 pm
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


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const merged = new ListNode();
    let currentNode = merged;

    while (list1 !== null || list2 !== null) {
        if (list1 != null && (list2 == null || list1.val <= list2.val)) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2!.next;
        }
        currentNode = currentNode.next!;
    }

    const result = merged.next;
    return result;
}
