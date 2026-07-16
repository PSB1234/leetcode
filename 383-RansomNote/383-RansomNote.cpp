// Last updated: 16/7/2026, 9:18:56 pm
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        
    if (ransomNote.size()>magazine.size()) return false;
    unordered_map<char,int> freq;
    for (char i : ransomNote) {
        freq[i]++;
    }
    for (char j : magazine) {
        if (freq.contains(j)) {
            freq[j]--;
        }
    }
    for (const auto &[a,b]:freq)  {
        if (b >0) {
            return false;
        }
    }
    return true;
    }
};