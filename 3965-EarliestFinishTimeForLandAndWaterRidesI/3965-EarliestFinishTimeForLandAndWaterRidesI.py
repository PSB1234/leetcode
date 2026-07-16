# Last updated: 16/7/2026, 9:15:46 pm
class Solution:
    def earliestFinishTime(self, landStartTime: List[int], landDuration: List[int], waterStartTime: List[int], waterDuration: List[int]) -> int:
        ans = float("inf")
        for i in range(len(landStartTime)):
            land_finish = landStartTime[i] + landDuration[i]
    
            for w in range(len(waterStartTime)):
                ans = min(
                    ans,
                    max(land_finish, waterStartTime[w]) + waterDuration[w]
                )
    
        for w in range(len(waterStartTime)):
            water_finish = waterStartTime[w] + waterDuration[w]
    
            for i in range(len(landStartTime)):
                ans = min(
                    ans,
                    max(water_finish, landStartTime[i]) + landDuration[i]
                )
    
        return ans