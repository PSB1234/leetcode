// Last updated: 16/7/2026, 9:22:03 pm
class Solution {
public:
    int maxArea(vector<int>& height) {
        int maxArea = 0;
        int i = 0;
        int j = height.size() - 1;
        while (i < j) {
            maxArea = max(maxArea, (min(height[i], height[j]) * (j - i)));
            if (height[i] > height[j]) {
                j--;
            } else {
                i++;
            }
        }
        return maxArea;
    }
};