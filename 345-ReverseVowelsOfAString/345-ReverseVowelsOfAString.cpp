// Last updated: 16/7/2026, 9:19:05 pm
class Solution {
public:
    string reverseVowels(string s) {
                int left = 0;
        int right = s.size()-1;
        vector<char> mchars {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
        while (left<right) {
            if(find(mchars.begin(),mchars.end(),s[left])==mchars.end()) {
                left++;
            }else if(find(mchars.begin(),mchars.end(),s[right])==mchars.end()) {
                right--;
            }else{
                char tmp = s[left];
                s[left]=s[right];
                s[right]=tmp;
                left++;
                right--;
            }
        }
    return s;
    }
};