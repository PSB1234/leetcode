/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
**/





function mergeLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
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
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let interval = 0;
    while (interval < lists.length) {
        for (let i = 0; i < lists.length - interval; i *= 2) {
            lists[i] = mergeLists(lists[i], lists[i + interval]);
            lists[i + interval] = null;
        }
        interval *= 2;
    }
    return lists[0];
};
// @lc code=end

