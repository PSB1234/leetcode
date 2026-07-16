// Last updated: 16/7/2026, 9:18:46 pm
function findMaxConsecutiveOnes(nums: number[]): number {
    let one = 0;
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]==0){
            one = 0;
        }else{
            one++;
        }
        max = Math.max(one,max);
    }
    return max;
};