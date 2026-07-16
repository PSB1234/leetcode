// Last updated: 16/7/2026, 9:17:23 pm
class Solution {
public:
    double averageWaitingTime(vector<vector<int>>& customers) {
        int i = 0;
int j = 0;
double ans = 0;
while(j!=customers.size()){
    if(i>=customers[j][0]){
        i+=customers[j][1];
        ans += i-customers[j][0];
        j++;
    }else{
        i++;
    }

}
return ans/customers.size();
    }
};