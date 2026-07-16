// Last updated: 16/7/2026, 9:20:24 pm
class LRUNode {
    key: number;
    value: number;
    next: LRUNode | null;
    prev: LRUNode | null;

    constructor(key: number = 0, value: number = 0) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    private capacity: number;
    private map: Map<number, LRUNode>;
    private left: LRUNode;
    private right: LRUNode;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map<number, LRUNode>();

        this.left = new LRUNode();
        this.right = new LRUNode();
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    private insert(node: LRUNode): void {
        const prev = this.right.prev!;
        const next = this.right;

        prev.next = node;
        node.prev = prev;
        node.next = next;
        next.prev = node;
    }

    private remove(node: LRUNode): void {
        const prev = node.prev!;
        const next = node.next!;
        prev.next = next;
        next.prev = prev;
    }

    get(key: number): number {
        const node = this.map.get(key);
        if (node) {
            this.remove(node);
            this.insert(node);
            return node.value;
        }
        return -1;
    }

    put(key: number, value: number): void {
        const existingNode = this.map.get(key);

        if (existingNode) {
            this.remove(existingNode);
            existingNode.value = value;
            this.insert(existingNode);
        } else {
            const newNode = new LRUNode(key, value);
            this.map.set(key, newNode);
            this.insert(newNode);

            if (this.map.size > this.capacity) {
                const lru = this.left.next!;
                this.remove(lru);
                this.map.delete(lru.key);
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */