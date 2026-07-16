// Last updated: 16/7/2026, 9:17:32 pm
function minCost(colors: string, neededTime: number[]): number {
    let totalTime = 0;
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] == colors[i + 1]) {
            if (neededTime[i] < neededTime[i + 1]) {
                totalTime += neededTime[i];

            } else {
                totalTime += neededTime[i + 1];
                let temp = neededTime[i + 1];
                neededTime[i + 1] = neededTime[i];
                neededTime[i] = temp;
            }
        }
    }
    return totalTime;
};