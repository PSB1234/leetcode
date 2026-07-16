// Last updated: 16/7/2026, 9:20:07 pm
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
    int i = 0;
    vector<int> ans;
    int j= numbers.size()-1;;
    while(i<j){
        if(numbers[i]+numbers[j]<target){
            i++;
        } else if(numbers[i]+numbers[j]>target){
            j--;
        }else{
            break;
        }
    }
    ans.emplace_back(i+1);
    ans.emplace_back(j+1);
    return ans;
    }
};