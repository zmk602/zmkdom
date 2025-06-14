/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let count = 0;
    
    const dfs = (i) => {
        visited[i] = true;
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    };
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }
    
    return count;
};