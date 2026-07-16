// Last updated: 16/7/2026, 9:17:25 pm
class Solution {
public:
    string interpret(string command) {
        string ret;
    for (int i = 0; i < command.size(); ++i) {
      if(command[i]=='G'){
          ret.append("G");
      }
      if(command[i]=='('){
          if(command[i+1]==')'){
              ret.append("o");
              i++;
          }
          else if (command[i+1]=='a'){
              ret.append("al");
                i+=3;
          }
      }
    }
    return ret;
    }
};