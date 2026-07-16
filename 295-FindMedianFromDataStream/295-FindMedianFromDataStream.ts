// Last updated: 16/7/2026, 9:19:16 pm
class mMinHeap {
    private heap: number[] = [];

    private parent(i: number) { return Math.floor((i - 1) / 2); }
    private left(i: number) { return 2 * i + 1; }
    private right(i: number) { return 2 * i + 2; }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val: number) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return root;
    }

    private bubbleUp(index: number) {
        while (
            index > 0 &&
            this.heap[this.parent(index)] > this.heap[index]
        ) {
            [this.heap[index], this.heap[this.parent(index)]] =
                [this.heap[this.parent(index)], this.heap[index]];
            index = this.parent(index);
        }
    }

    private bubbleDown(index: number) {
        let smallest = index;
        const left = this.left(index);
        const right = this.right(index);

        if (left < this.size() && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.size() && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];
            this.bubbleDown(smallest);
        }
    }
}
class mMaxHeap {
    private heap: number[] = [];

    private parent(i: number) { return Math.floor((i - 1) / 2); }
    private left(i: number) { return 2 * i + 1; }
    private right(i: number) { return 2 * i + 2; }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    push(val: number) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return root;
    }

    private bubbleUp(index: number) {
        while (
            index > 0 &&
            this.heap[this.parent(index)] < this.heap[index]
        ) {
            [this.heap[index], this.heap[this.parent(index)]] =
                [this.heap[this.parent(index)], this.heap[index]];
            index = this.parent(index);
        }
    }

    private bubbleDown(index: number) {
        let largest = index;
        const left = this.left(index);
        const right = this.right(index);

        if (left < this.size() && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < this.size() && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            [this.heap[index], this.heap[largest]] =
                [this.heap[largest], this.heap[index]];
            this.bubbleDown(largest);
        }
    }
}


class MedianFinder {
    max_store: mMinHeap;//min heap
    min_store: mMaxHeap;//max heap
    constructor() {
        this.max_store = new mMinHeap();
        this.min_store = new mMaxHeap();
    }

    addNum(num: number): void {
        if (num > this.max_store.peek()) {
            this.max_store.push(num);
            const abs_size = Math.abs(this.min_store.size() - this.max_store.size());
            if (abs_size >= 1) {
                const temp = this.max_store.pop()!;
                this.min_store.push(temp);
            }
        } else {
            this.min_store.push(num);
            const abs_size = Math.abs(this.min_store.size() - this.max_store.size());
            if (abs_size >= 2) {
                const temp = this.min_store.pop()!;
                this.max_store.push(temp);
            }
        }

    }

    findMedian(): number {
        const size = this.min_store.size() + this.max_store.size()
        let ans = 0;
        if (size % 2) {
            ans = this.min_store.peek();
        } else {
            ans = (this.max_store.peek() + this.min_store.peek()) / 2;
        }
        return ans;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */