// Last updated: 16/7/2026, 9:18:19 pm
class Solution {
public:
    int maxProfitAssignment(vector<int>& difficulty, vector<int>& profit,
                            vector<int>& worker) {
      int tProfit = 0;
        int preProfit = INT_MIN;
        vector<pair<int,int>> jobs;
        for (int k = 0; k < difficulty.size(); ++k) {
            jobs.emplace_back(difficulty[k], profit[k]);
         }

        int j = jobs.size()-1;
        int i = worker.size()-1;

        sort(worker.begin(),worker.end());
        sort(jobs.begin(),jobs.end());

    for (int k = 0; k < jobs.size(); ++k) {
        preProfit = preProfit<jobs[k].second ? jobs[k].second:preProfit;
        jobs[k].second  = preProfit;
    }

        while(i>=0 && j>=0){
            if (jobs[j].first<=worker[i]){
                tProfit+=jobs[j].second;
                i--;
            }else{
                j--;
            }
        }
        return tProfit;
    }
};