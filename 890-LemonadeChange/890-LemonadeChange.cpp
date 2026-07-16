// Last updated: 16/7/2026, 9:18:16 pm
class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
            unordered_map<int,int> changes = {
        {5,0},
        {10,0},
        {20,0}
    };
    for (const auto& bill:bills) {
        switch(bill) {
            case  5 :
                changes[5]+=1;
            break;
            case 10:
                if(changes[5]>0){
                    changes[5]-=1;
                    changes[10]+=1;
                }else {
                    return false;
                }
                break;
            case 20:
                if(changes[10]>0 || changes[5]>0){
                    if(changes[10]>0 && changes[5]>0) {
                        changes[10]-=1;
                        changes[5]-=1;
                        changes[20]+=1;
                    }else if(changes[5]>2 && changes[10]<=0) {
                        changes[5]-=3;
                        changes[20]+=1;
                    }else {
                        return false;
                    }
                }else {
                    return false;
                }
                break;
            default:
                break;
        }
    }
    return true;
    }
};