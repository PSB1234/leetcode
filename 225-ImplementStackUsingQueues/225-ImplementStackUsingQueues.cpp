// Last updated: 16/7/2026, 9:19:36 pm
class MyStack {
public:
        MyStack():container(){
    }
    
    void push(int x) {
        container.push(x);
    }
    void reverseQueue(queue<int> &q){
         if (q.size() == 0)
          return;
         int front = q.front();
         q.pop();
         reverseQueue(q);
         q.push(front);
    }
    int pop() {
        if (empty()) {
        throw runtime_error("Stack is empty");
         }
        reverseQueue(container);
        int popedValue = container.front();
        container.pop();
        reverseQueue(container);
        return popedValue;
        }
    
    int top() {
        return container.back();
    }
    
    bool empty() {
        return container.empty();
    }
private:
   queue<int> container;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */