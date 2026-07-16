// Last updated: 16/7/2026, 9:21:58 pm
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
    sort(nums.begin(),nums.end());
    vector<vector<int>> ans;
    for (int i = 0; i < nums.size(); ++i) {
         if (i > 0 && nums[i] == nums[i - 1]) continue;
        int target  = -nums[i];
        int j = i+1;
        int k = nums.size()-1;
        while (j<k){
            int num2 = nums[j];
            int num3 = nums[k];
            if(num2+num3>target){
                k--;
            }else if(num2+num3<target){
                j++;
            }else{
                ans.push_back({nums[i], num2, num3});
                while (j < k && nums[j] == nums[j + 1]) j++; 
                while (j < k && nums[k] == nums[k - 1]) k--;
                j++;
                k--;
            }
        }
    }
    return ans;
    }
};