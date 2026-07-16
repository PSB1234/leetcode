// Last updated: 16/7/2026, 9:21:52 pm
class Solution {
public:
    bool isValid(string s) {
    if (s.size() % 2 == 0) {
        std::stack<char> stringop;

        for (auto i : s) {
            if (i == '(' || i == '{' || i == '[') {
                stringop.push(i);
            }else if ((i == ')'&& !stringop.empty() && stringop.top() == '(') ||
                (i == '}'&& !stringop.empty() && stringop.top() == '{') ||
                (i == ']'&& !stringop.empty() && stringop.top() == '[')) {
                stringop.pop();
            }else{
              return false;
            }
        }


      return stringop.empty();
    } else {
        return false;
    }
      
      
    }
};