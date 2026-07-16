// Last updated: 16/7/2026, 9:22:15 pm


class Solution {
public:
    double findMedianSortedArrays(std::vector<int>& nums1, std::vector<int>& nums2) {
        std::vector<int> num3;
        int i = 0, j = 0;
        while (i < nums1.size() && j < nums2.size()) {
            if (nums1[i] < nums2[j]) {
                num3.push_back(nums1[i]);
                i++;
            } else {
                num3.push_back(nums2[j]);
                j++;
            }
        }

        while (i < nums1.size()) {
            num3.push_back(nums1[i]);
            i++;
        }
        while (j < nums2.size()) {
            num3.push_back(nums2[j]);
            j++;
        }
        int size = num3.size();
        double ans;
        if (size % 2 == 0) {
            ans = (num3[size / 2 - 1] + num3[size / 2]) / 2.0;
        } else {
            ans = num3[size / 2];
        }

        return ans;
    }
};
