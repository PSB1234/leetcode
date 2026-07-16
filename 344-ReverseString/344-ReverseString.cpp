// Last updated: 16/7/2026, 9:19:06 pm
class Solution {
public:
    void reverseString(vector<char>& s) {
        int i =0;
    int j = s.size()-1;
        while (i<j)
        {
            char temp = s[i];
            s[i]=s[j];
            s[j]=temp;
            i++;
            j--;
        } 
    }
};