// Last updated: 16/7/2026, 9:17:47 pm
class ProductOfNumbers {

public:
    ProductOfNumbers() {}

    void add(int num) {
        if (num == 0) {
            prefix.clear();
            product = 1;
            return;
        }
        product = product * num;
        prefix.emplace_back(product);
    }

    int getProduct(int k) {

        if (k > prefix.size())
            return 0;
        int highestProd = prefix[prefix.size() - 1];
        if (k == prefix.size())
            return highestProd;

        return highestProd / prefix[prefix.size() - k - 1];
    }

private:
    vector<int> prefix;
    int product = 1;
};