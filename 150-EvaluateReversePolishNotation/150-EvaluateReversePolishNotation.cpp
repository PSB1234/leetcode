// Last updated: 16/7/2026, 9:20:17 pm
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<string> polishStack;
    for (auto &expressions : tokens)
    {
        if (expressions == "*"|| expressions == "+"|| expressions == "-"|| expressions == "/")
        {
            int a = stoi(polishStack.top());
            polishStack.pop();
            int b = stoi(polishStack.top());
            polishStack.pop();
            if (expressions == "*") {
                polishStack.push(to_string(a * b));
            } else if (expressions == "+") {
                polishStack.push(to_string(a + b));
            } else if (expressions == "-") {
                polishStack.push(to_string(b - a));
            } else if (expressions == "/") {
                polishStack.push(to_string(b / a));
            }
            
        }else{
            polishStack.push(expressions);
        }

    }
    return stoi(polishStack.top());
    }
};