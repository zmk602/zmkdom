/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length;
    const colors = new Array(n).fill(-1); // -1表示未染色，0和1表示两种颜色
    
    for (let i = 0; i < n; i++) {
        if (colors[i] === -1) { // 如果节点未染色
            const queue = [i];
            colors[i] = 0; // 初始染色为0
            
            while (queue.length > 0) {
                const current = queue.shift();
                for (const neighbor of graph[current]) {
                    if (colors[neighbor] === -1) { // 如果邻居未染色
                        colors[neighbor] = 1 - colors[current]; // 染相反颜色
                        queue.push(neighbor);
                    } else if (colors[neighbor] === colors[current]) {
                        return false; // 相邻节点颜色相同，不是二分图
                    }
                }
            }
        }
    }
    
    return true;