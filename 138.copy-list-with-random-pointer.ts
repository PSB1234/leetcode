/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * Definition for _Node.
 *
 * class _Node {
 *   val: number
 *   next: _Node | null
 *   random: _Node | null
 *   constructor(val?: number, next?: _Node, random?: _Node) {
 *       this.val = (val === undefined ? 0 : val)
 *       this.next = (next === undefined ? null : next)
 *       this.random = (random === undefined ? null : random)
 *   }
*}
* */


function copyRandomList(head: _Node | null): _Node | null {
    let initializer_ptr = head;
    const map = new Map<_Node, _Node>();
    while (initializer_ptr != null) {
        map.set(initializer_ptr, new _Node);
        initializer_ptr = initializer_ptr.next;
    }
    let ptr = head;
    while (ptr != null) {
        const tempNode = map.get(ptr);
        if (tempNode != null) {
            tempNode.val = ptr.val;
            const temp_next = map.get(ptr.next);
            tempNode.next = temp_next === undefined ? null : temp_next;
            if (ptr.random !== null) {
                const temp_random = map.get(ptr.random);
                tempNode.random = temp_random === undefined ? null : temp_random;
            } else {
                tempNode.random = null;
            }
        }
        ptr = ptr.next;
    }
    if (head === null) {
        return null;
    }
    const ans = map.get(head);
    return ans === undefined ? null : ans;
};
// @lc code=end

