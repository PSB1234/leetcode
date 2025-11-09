/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start

function largestRectangleArea(heights: number[]): number {
    const bars: number[] = [];
    let max_Area = 0;
    let i = 0;
    while (i < heights.length) {

        if (bars.length === 0 || heights[bars[bars.length - 1]] <= heights[i]) {
            bars.push(i);
            i++;
        } else {
            const top = bars.pop()!;
            const top_height = heights[top];
            const width = bars.length === 0 ? i : i - bars[bars.length - 1] - 1;
            max_Area = Math.max(max_Area, width * top_height);
        }

    }
    while (bars.length !== 0) {
        const top = bars.pop()!;
        const top_height = heights[top];
        const width = bars.length === 0 ? i : i - bars[bars.length - 1] - 1;
        max_Area = Math.max(max_Area, width * top_height);
    }
    return max_Area;
};
// @lc code=end

