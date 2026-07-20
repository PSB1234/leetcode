# Last updated: 20/7/2026, 10:08:56 pm
1class Solution:
2    def canJump(self, nums: List[int]) -> bool:
3        check:List[bool] = [False] * len(nums)
4        check[-1] = True
5        for i in range(len(nums)-2,-1,-1):
6            mj = min(len(nums),i+nums[i])
7            for j in range(i,mj):
8                if check[j+1] is True:
9                    check[i] = True
10                    break
11        return check[0]