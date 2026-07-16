// Last updated: 16/7/2026, 9:18:58 pm
class RandomizedSet {

private:
    unordered_set<int> RandomSet;
public:
    RandomizedSet() {
    }

    bool insert(int val) {
        if (RandomSet.contains(val)) {
            return false;
        }
        RandomSet.emplace(val);
        return true;
    }

    bool remove(int val) {
        if (!RandomSet.contains(val)) {
            return false;
        }
        RandomSet.erase(val);
        return true;
    }

    int getRandom() {
        if (RandomSet.empty()) {
            return -1; 
        }
        auto  itr = RandomSet.begin();
        int index = rand() % RandomSet.size() ;
        advance(itr,index);
        return *itr;
    }
};
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet* obj = new RandomizedSet();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */