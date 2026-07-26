# Last updated: 26/7/2026, 3:59:10 pm
1class Solution:
2    def maximumProduct(self, nums: List[int]) -> int:
3        max1 = float('-inf')
4        max2 = float('-inf')
5        max3 = float('-inf')
6        min1 = float('inf')
7        min2 = float('inf')
8        min3 = float('inf')
9        for num in nums:
10            if num>max1:
11                max3=max2
12                max2=max1
13                max1=num
14            elif num>max2:
15                max3=max2
16                max2=num
17            elif num>max3:
18                max3=num
19            if num<min1:
20                min3=min2
21                min2=min1
22                min1=num
23            elif num<min2:
24                min3=min2
25                min2=num
26            elif num<min3:
27                min3=num
28        return max(max1*max2*max3,min1*min2*min3,min1*min2*max1)
29        