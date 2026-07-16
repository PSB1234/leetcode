// Last updated: 16/7/2026, 9:16:25 pm
class Solution {
public:
    vector<double> convertTemperature(double celsius) {
        vector<double> a;
        a.emplace_back(celsius + 273.15);
        a.emplace_back((celsius * 1.80) + 32.00);
        return a;
    }
};