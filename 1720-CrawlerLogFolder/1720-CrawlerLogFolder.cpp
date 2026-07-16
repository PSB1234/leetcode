// Last updated: 16/7/2026, 9:17:31 pm
class Solution {
public:
    int minOperations(vector<string>& logs) {
     stack<string> ustack;
    for (int i = 0; i < logs.size(); ++i) {
        if("./" != logs[i]){
            if("../" ==logs[i] ){
                if(!ustack.empty()){
                    ustack.pop();
                }
            }else{
                ustack.push(logs[i]);
            }
        }
    }
    return ustack.size();
    }
};