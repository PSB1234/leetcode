// Last updated: 16/7/2026, 9:19:03 pm
function topKFrequent(nums: number[], k: number): number[] {
    const freqToNum = new Map<number, Set<number>>();
    const numToFreq:Map<number,number> = new Map();
    for(let i = 0;i<nums.length;i++){
        if(numToFreq.has(nums[i])){
            const freq = numToFreq.get(nums[i])!;
            freqToNum.get(freq)!.delete(nums[i]);
            const newFreq = freq + 1;  
            numToFreq.set(nums[i],freq+1);
            if (!freqToNum.has(newFreq)) {
                freqToNum.set(newFreq, new Set());
            }
            freqToNum.get(newFreq)!.add(nums[i]);
        }else{
            numToFreq.set(nums[i],1);
            if (!freqToNum.has(1)) {
                freqToNum.set(1, new Set());
            }
        
            freqToNum.get(1)!.add(nums[i]);

        }
    }
    const ans:number[] = [];
    for (let freq = nums.length; freq >= 1 && ans.length < k; freq--) {
        if (freqToNum.has(freq)) {
            for (const num of freqToNum.get(freq)!) {
                ans.push(num);
                if (ans.length === k) break;
            }
        }
    }
    
    return ans;
    
};