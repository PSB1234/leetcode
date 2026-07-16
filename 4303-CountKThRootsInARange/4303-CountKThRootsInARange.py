# Last updated: 16/7/2026, 9:15:30 pm
class Solution:
    def countKthRoots(self, l: int, r: int, k: int) -> int:
        eps = 1e-10
        low = math.ceil(l ** (1 / k)-eps)
        high = math.floor(r ** (1 / k)+eps)
        
        return max(0, high - low + 1)