// Last updated: 16/7/2026, 9:18:29 pm
class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
            vector<int> check;
    for (int& asteroid : asteroids) {
        if (check.empty()) {
            check.emplace_back(asteroid);
        } else {
            bool isCollision  = false;
            if(asteroid<0 && check.back()>0){
                isCollision =true;
                while(!check.empty() && isCollision && check.back() > 0){
                    if(abs(asteroid) == abs(check.back())){
                        check.pop_back();
                        isCollision=false;
                    }else if(abs(asteroid)>abs(check.back())){
                        check.pop_back();
                    }else{
                        isCollision = false;
                    }
                }
                if(isCollision){
                    check.emplace_back(asteroid);
                }
            }else{
                check.emplace_back(asteroid);
            }
        }
    }
    return check;
    }
};