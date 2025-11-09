/*
 * @lc app=leetcode id=3408 lang=typescript
 *
 * [3408] Design Task Manager
 */

// @lc code=start
class TaskManager {
    private mTasks: Map<number,[number,number]>;
    
    constructor(tasks: number[][]) {
        this.mTasks=new Map();
  
    }

    add(userId: number, taskId: number, priority: number): void {
        this.mTasks.set(userId,[taskId,priority]);
    }

    edit(taskId: number, newPriority: number): void {
       this.mTasks.forEach((element, key) => {
        if (element[0] === taskId) {
            this.mTasks.set(key, [element[0], newPriority]);
        }
    });
 
    }

    rmv(taskId: number): void {
        const keysToDelete: number[] = [];
        this.mTasks.forEach((element, key) => {
            if (element[0] === taskId) keysToDelete.push(key);
        });
        keysToDelete.forEach(key => this.mTasks.delete(key));
    }

    execTop(): number {
        if (this.mTasks.size === 0) return -1;
        
        let maxUserId = -1;
        let maxTaskId = -1;
        let maxPriority = -1;
        
        this.mTasks.forEach((value, userId) => {
            const [taskId, priority] = value;
            if (
                priority > maxPriority ||
                (priority === maxPriority && taskId > maxTaskId)
            ) {
                maxPriority = priority;
                maxTaskId = taskId;
                maxUserId = userId;
            }
        });
    
        return maxUserId;

    }
}


/**
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */
// @lc code=end

