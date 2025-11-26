/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
 */

// @lc code=start
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

function getKthNode(groupPrev: ListNode | null, k: number) {
    while (groupPrev != null && k > 0) {
        groupPrev = groupPrev.next;
        k--;
    }
    return groupPrev;
}
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    const dummyNode = new ListNode(0, head);
    let groupPrev: ListNode | null = dummyNode;
    while (true) {
        const kthNode = getKthNode(groupPrev, k);
        if (kthNode != null) {
            const groupNext = kthNode.next;
            let prev = kthNode.next;
            let curr: ListNode | null = groupPrev!.next;
            while (curr !== groupNext) {
                const tmp = curr?.next!;
                curr!.next = prev;
                prev = curr;
                curr = tmp;
            }
            const tmp: ListNode | null = groupPrev!.next;
            groupPrev!.next = kthNode;
            groupPrev = tmp;
        } else {
            break;
        }
    }
    return dummyNode.next;
};

// @lc code=end

