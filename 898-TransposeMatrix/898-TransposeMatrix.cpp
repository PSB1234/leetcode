// Last updated: 16/7/2026, 9:18:15 pm
class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& matrix) {
        if(matrix.empty()|| matrix[0].empty()){
      return vector<vector<int>>();;
    }
        vector<vector<int>> trans;
        vector<int> alt;
        int sizeOfMatrix = matrix[0].size();
        for(int i =0 ;i<sizeOfMatrix;i++){
            for(int j =0 ;j<matrix.size();j++){
              alt.push_back(matrix[j][i]);
            }
            trans.push_back(alt);
            alt.clear();
        }
        return trans;
    }
};