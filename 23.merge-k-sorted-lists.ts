/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
**/




class ListNode1 {
    val: number
    next: ListNode1 | null
    constructor(val?: number, next?: ListNode1 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function mergeKLists(lists: Array<ListNode1 | null>): ListNode1 | null {
    let nodesArray: Array<ListNode1> = []

    lists.forEach((node) => {
        while (node) {
            nodesArray.push(node);
            node = node.next;
        }
    });

    nodesArray.sort((node1, node2) => node1.val - node2.val);

    let resultNode = nodesArray[0] ?? null;

    nodesArray.forEach((node, index, arr) => {
        node.next = arr[index + 1] ?? null;
    });

    return resultNode;
};
// @lc code=end

