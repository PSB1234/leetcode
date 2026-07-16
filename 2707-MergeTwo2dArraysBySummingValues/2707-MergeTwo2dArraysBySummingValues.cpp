// Last updated: 16/7/2026, 9:16:20 pm
class Solution {
public:
    vector<vector<int>> mergeArrays(vector<vector<int>>& nums1, vector<vector<int>>& nums2) {
            vector<vector<int>> result;
    int i = 0, j = 0;
    int size1 = nums1.size(), size2 = nums2.size();

    while (i < size1 && j < size2) {
        int index1 = nums1[i][0];
        int index2 = nums2[j][0];

        if (index1 == index2) {
            result.push_back({index1, nums1[i][1] + nums2[j][1]});
            i++;
            j++;
        } else if (index1 < index2) {
            result.push_back(nums1[i]);
            i++;
        } else {
            result.push_back(nums2[j]);
            j++;
        }
    }

    while (i < size1) {
        result.push_back(nums1[i]);
        i++;
    }
    while (j < size2) {
        result.push_back(nums2[j]);
        j++;
    }

    return result;
    }
};