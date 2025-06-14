var cloneGraph = function(node) {
    if (!node) return null;
    
    const visited = new Map();
    const queue = [node];
    
    // 创建第一个克隆节点并存入哈希表
    visited.set(node, new Node(node.val));
    
    while (queue.length > 0) {
        const originalNode = queue.shift();
        
        // 遍历所有邻居节点
        for (const neighbor of originalNode.neighbors) {
            if (!visited.has(neighbor)) {
                // 如果邻居节点未被访问过，创建克隆节点并存入哈希表
                visited.set(neighbor, new Node(neighbor.val));
                queue.push(neighbor);
            }
            // 将克隆的邻居节点添加到当前克隆节点的邻居列表中
            visited.get(originalNode).neighbors.push(visited.get(neighbor));
        }
    }
    
    return visited.get(node);
};