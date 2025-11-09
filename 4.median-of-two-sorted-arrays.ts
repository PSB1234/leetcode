/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const total_length = nums1.length + nums2.length;
    const half = Math.floor(total_length / 2);
    if (nums1.length < nums2.length) {
        [nums2, nums1] = [nums1, nums2];
    }

    let left = 0;
    let right = nums2.length - 1;
    let middle = 0;
    while (true) {
        middle = left + Math.floor((right - left) / 2);
        const Lnums2 = nums2[middle] !== undefined ? nums2[middle] : -Infinity;
        const Rnums2 = nums2[middle + 1] !== undefined ? nums2[middle + 1] : Infinity;
        const Lnums1 = nums1[half - middle - 2] !== undefined ? nums1[half - middle - 2] : -Infinity;
        const Rnums1 = nums1[half - middle - 1] !== undefined ? nums1[half - middle - 1] : Infinity;
        if (Lnums1 <= Rnums2 && Lnums2 <= Rnums1) {
            if (!(total_length % 2)) {
                const leftSide = Math.max(Lnums1, Lnums2);
                const rightSide = Math.min(Rnums1, Rnums2);
                return (leftSide + rightSide) / 2;
            }
            return Math.min(Rnums1, Rnums2);
        }
        else if (Lnums2 > Rnums1) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }

    }
};

// @lc code=end

