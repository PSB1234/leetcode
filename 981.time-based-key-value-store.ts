/*
 * @lc app=leetcode id=981 lang=typescript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start 

class TimeMap {
    private map = new Map<string, [timeStamp: number, value: string][]>();

    constructor() { }

    set(key: string, value: string, timestamp: number): void {
        const existing = this.map.get(key);
        if (existing) {
            existing.push([timestamp, value]);
        } else {
            this.map.set(key, [[timestamp, value]]);
        }
    }
    get(key: string, timestamp: number): string {
        const existing = this.map.get(key);
        if (existing) {
            return this.binarySearch(existing, timestamp);
        } else {
            return ""
        }
    }
    private binarySearch(arr: [timeStamp: number, value: string][], target: number): string {
        let left = 0;
        let right = arr.length - 1;
        let res = "";
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (arr[mid][0] > target) {
                right = mid - 1;
            }
            else {
                res = arr[mid][1];
                left = mid + 1;
            }
        }
        return res;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end

