// Last updated: 16/7/2026, 9:16:39 pm
class Solution {
public:
    string largestGoodInteger(string num) {
          string ans ="";
        if (num.find("999") != std::string::npos) {
        ans = "999";
    } else if (num.find("888") != std::string::npos) {
        ans = "888";
    } else if (num.find("777") != std::string::npos) {
        ans = "777";
    } else if (num.find("666") != std::string::npos) {
        ans = "666";
    } else if (num.find("555") != std::string::npos) {
        ans = "555";
    } else if (num.find("444") != std::string::npos) {
        ans = "444";
    } else if (num.find("333") != std::string::npos) {
        ans = "333";
    } else if (num.find("222") != std::string::npos) {
        ans = "222";
    } else if (num.find("111") != std::string::npos) {
        ans = "111";
    } else if (num.find("000") != std::string::npos) {
        ans = "000";
    }
        return ans;
    }
};