# Last updated: 16/7/2026, 9:15:37 pm
class Solution:
    def gcdSum(self, nums: list[int]) -> int:
        def gcd(a: int, b: int) -> int:
            return a if b == 0 else gcd(b, a % b)
        prefixGcd = [0] * len(nums)
        mx = -1
        for i in range(len(nums)):
            mx = max(nums[i], mx)
            prefixGcd[i] = gcd(mx, nums[i])
        prefixGcd.sort()
        i = 0
        j = len(prefixGcd) - 1
        ans = []
        while i < j:
            ans.append(gcd(prefixGcd[i], prefixGcd[j]))
            i += 1
            j -= 1       
        return sum(ans)