# Last updated: 16/7/2026, 9:17:54 pm
class Solution(object):
    def longestCommonSubsequence(self, text1, text2):
            m = len(text1)
            n = len(text2)
            lcs = [[0]*(n+1) for _ in range(m+1)]
            for i in range(1,m+1):
                for j in range(1,n+1):
                    if text1[i-1] == text2[j-1]:
                        lcs[i][j] = lcs[i - 1][j - 1] + 1
                    else:
                        lcs[i][j] = max(lcs[i - 1][j], lcs[i][j - 1])
            return lcs[m][n]

        