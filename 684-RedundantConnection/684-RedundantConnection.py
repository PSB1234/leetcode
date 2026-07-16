# Last updated: 16/7/2026, 9:18:33 pm
class Solution(object):
    def findRedundantConnection(self, edges):
        """
        :type edges: List[List[int]]
        :rtype: List[int]
        """
        n = len(edges)
        parents = [i for i in range(n+1)]
        rank  = [0]* (n+1)
        def fetch(node):
            if parents[node] == node:
                return node
            return fetch(parents[node])
            
        def union(node1,node2):
            par1 = fetch(node1)
            par2 = fetch(node2)
            if(par1 == par2):
                return False
            if rank[par1]>rank[par2]:
                parents[par2] = par1
                rank[par2]+=rank[par1]
            else:
                parents[par1] = par2
                rank[par1]+=rank[par2]
            return True
        for edge in edges:
            if not union(edge[0],edge[1]):
                return edge