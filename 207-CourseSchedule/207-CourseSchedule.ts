// Last updated: 16/7/2026, 9:19:50 pm
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adjList = new Map<number, number[]>();
    const visited: boolean[] = new Array(numCourses).fill(false);
    const validCourse: boolean[] = new Array(numCourses).fill(false);
    for (let k = 0; k < numCourses; k++) {
        adjList.set(k, [] as number[]);
    }
    for (const mapping of prerequisites) {
        const getList = adjList.get(mapping[0]);
        if (getList) {
            getList.push(mapping[1]);
        }
    }
    function dfs(index: number, list: number[]): boolean {

        if (visited[index] === false) {
            visited[index] = true;
        } else {
            return validCourse[index];
        }
        let ans = true;
        for (let i = 0; i < list.length; i++) {
            ans = ans && dfs(list[i], adjList.get(list[i])!);
        }
        validCourse[index] = ans;
        return validCourse[index];
    }
    for (let i = 0; i < numCourses; i++) {
        dfs(i, adjList.get(i)!);
    }
    for (const course of validCourse) {
        if (course === false) return false;
    }
    return true;
};