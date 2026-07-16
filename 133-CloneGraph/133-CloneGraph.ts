// Last updated: 16/7/2026, 9:20:32 pm
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    if (node === null) return null;
    const visited = new Map<_Node, _Node>();
    function dfs(node: _Node | null): _Node | null {
        if (node === null) return null;
        if (visited.has(node)) return visited.get(node)!;
        const tempNode = new _Node(node.val);
        visited.set(node, tempNode);
        for (let i = 0; i < node.neighbors.length; i++) {
            const temp = dfs(node.neighbors[i]);
            if (temp) {
                tempNode.neighbors.push(temp);
            }
        }
        return tempNode;
    }
    return dfs(node);
};



