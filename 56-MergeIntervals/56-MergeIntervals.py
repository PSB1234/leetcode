# Last updated: 16/7/2026, 9:21:24 pm
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key = lambda x:x[0])
        ansList = [intervals[0]]
        for newStart,newEnd in intervals[1:]:
            oldEnd = ansList[-1][1]
            if oldEnd >= newStart:
                ansList[-1][1] = max(oldEnd,newEnd)
            else:
                ansList.append([newStart,newEnd])
        return ansList