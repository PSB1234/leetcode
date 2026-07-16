// Last updated: 16/7/2026, 9:18:23 pm
function minCostClimbingStairs(cost: number[]): number {
    for(let i = 1;i< cost.length;i++){
        cost[i] += Math.min(cost[i-1],cost[i-2]!==undefined?cost[i-2]:0);
    }
    return Math.min(cost[cost.length-1],cost[cost.length-2]);
};