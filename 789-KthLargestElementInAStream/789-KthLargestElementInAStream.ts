// Last updated: 16/7/2026, 9:18:22 pm
class KthLargest {
    k: number = 0;
    arr: number[] = [];
    constructor(k: number, nums: number[]) {
        this.k = k;
        for (let i = 0; i < nums.length; i++) {
            this.add(nums[i]);
        }
    }

    add(val: number): number {
        for (let i = 0; i < this.arr.length; i++) {
            if (val >= this.arr[i]) {
                this.arr.splice(i, 0, val);
                return this.arr[this.k - 1];
            }
        }

        this.arr.push(val);
        return this.arr[this.k - 1];
    }

}


/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */