# Last updated: 16/7/2026, 9:15:45 pm
class Solution:
    def earliestFinishTime(
        self,
        landStartTime: List[int],
        landDuration: List[int],
        waterStartTime: List[int],
        waterDuration: List[int],
    ) -> int:
        def calFinishTime(ls: List[int], ld: List[int], ws: List[int], wd: List[int]):
            mini = float("inf")
            ans = float("inf")

            for i in range(len(ls)):
                mini = min(mini, ls[i] + ld[i])

            for i in range(len(ws)):
                finish = max(mini, ws[i]) + wd[i]
                ans = min(ans, finish)

            return ans

        landFirst = calFinishTime(
            landStartTime, landDuration, waterStartTime, waterDuration
        )

        waterFirst = calFinishTime(
            waterStartTime, waterDuration, landStartTime, landDuration
        )

        return min(landFirst, waterFirst)
