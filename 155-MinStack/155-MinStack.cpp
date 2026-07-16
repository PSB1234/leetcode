// Last updated: 16/7/2026, 9:20:11 pm
class MinStack {
public:
       MinStack()
  {
  }

  void push(int val)
  {
    if (val <= getMin())
    {
      min.insert(min.begin(), val);
    };
    vstack.insert(vstack.begin(), val);
  }

  void pop()
  {
    if (vstack[0] == min[0])
    {
      min.erase(min.begin());
    }
    vstack.erase(vstack.begin());
  }

  int top()
  {
    return vstack[0];
  }

  int getMin()
  { if (min.empty()) {return INT_MAX;}
   
    return min[0];
  }
  private:
  vector<int> vstack;
  vector<int> min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */