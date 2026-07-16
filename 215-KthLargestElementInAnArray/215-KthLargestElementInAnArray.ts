// Last updated: 16/7/2026, 9:19:41 pm
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

function findKthLargest(nums: number[], k: number): number {
    const heap: mMaxHeap = new mMaxHeap();
    for (let i = 0; i < nums.length; i++) {
        heap.push(nums[i]);
    }
    for (let j = 1; j < k; j++) {
        heap.pop();
    }
    return heap.pop()!;
};