// Last updated: 16/7/2026, 9:19:47 pm
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const order: number[] = [];
    const visited = new Array(numCourses).fill(false);
    const validCourse = new Array(numCourses).fill(false);
    const adjList: number[][] = Array.from({ length: numCourses }, () => []);
    for (const pairs of prerequisites) {
        const from = pairs[0];
        adjList[from].push(pairs[1]);
    }
    function dfs(i: number, list: number[]) {
        if (visited[i] === false) {
            visited[i] = true;
        } else {
            return validCourse[i];
        }
        let ans = true;
        for (let i = 0; i < list.length; i++) {
            ans = ans && dfs(list[i], adjList[list[i]]);
        }
        validCourse[i] = ans;
        order.push(i);
        return validCourse[i];


    }
    for (let i = 0; i < numCourses; i++) {
        dfs(i, adjList[i]);
    }
    for (const course of validCourse) {
        if (course === false) return [];
    }
    return order;

};