// Last updated: 16/7/2026, 9:17:44 pm
class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
               vector<bool> kidscandies(candies.size());
       int candymax= INT_MIN;
       for (const auto &kidscandy: candies) {
           candymax= max(candymax,kidscandy);
       }
       for(int i= 0;i<candies.size();i++) {
           kidscandies[i] = extraCandies+candies[i]>=candymax?true:false; 
       }
       return kidscandies;
    }
};