# Last updated: 16/7/2026, 9:16:50 pm
class Solution:
    def minimumCost(self, cost: List[int]) -> int:
        cost = sorted(cost,reverse=True)
        count = 2
        total = 0
        for price in cost:
            if count == 0:
                count = 2
                continue
            else:
                count-=1
                total+=price
        return total
        
        