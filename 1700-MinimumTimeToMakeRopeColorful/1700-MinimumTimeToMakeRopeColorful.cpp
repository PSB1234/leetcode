// Last updated: 16/7/2026, 9:17:36 pm
class Solution {
public:
    int minCost(string colors, vector<int>& neededTime) {
    int totalCost = 0;

    for (int i =0 ; i < colors.size(); i++) {
        if (colors[i] == colors[i+1]) {
          if(neededTime[i]<neededTime[i+1]){
            totalCost += neededTime[i];
          }else{
            totalCost += neededTime[i+1];
            int temp = neededTime[i + 1];
           neededTime[i + 1] = neededTime[i];
            neededTime[i] = temp;
          }
        }
    }

    return totalCost;
}
      
    
};