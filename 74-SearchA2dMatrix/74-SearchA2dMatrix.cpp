// Last updated: 16/7/2026, 9:21:12 pm
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
            int vleft= 0;
    int vright = matrix.size()-1;
    int hRight  = matrix[0].size()-1;
    int hLeft = 0;
    int vmiddle;
    while(vleft<=vright){
        vmiddle = (vright-vleft)/2 + vleft;
        if(target<matrix[vmiddle][hRight] &&  target<matrix[vmiddle][hLeft]){
            vright = vmiddle-1;
        }else if(target>matrix[vmiddle][hRight] && target>matrix[vmiddle][hLeft]){
            vleft = vmiddle+1;
        }else{
           break;
        }
    }
    if (vleft > vright) {
        return false;
    }
    while (hLeft<=hRight){
        int hmiddle =  (hRight-hLeft)/2 + hLeft;
        if(target==matrix[vmiddle][hmiddle]){
            return true;
        }else if(target>matrix[vmiddle][hmiddle]){
            hLeft = hmiddle+1;
        }else{
            hRight = hmiddle-1;
        }
    }
    return false;
    }
};