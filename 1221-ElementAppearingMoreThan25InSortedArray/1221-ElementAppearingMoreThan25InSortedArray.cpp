// Last updated: 16/7/2026, 9:17:56 pm
class Solution {
public:
    int findSpecialInteger(vector<int>& arr) {
         unordered_map<int,int> map;
        int maxValue = std::numeric_limits<int>::min();
        int maxKey = 0;
        for(int i =0;i<arr.size();i++){
            map[arr[i]]++;
        }
       for(const auto &i:map){
           if (i.second > maxValue) {
            maxValue = i.second;
            maxKey = i.first;
        }
       }
       return maxKey;
    }
};