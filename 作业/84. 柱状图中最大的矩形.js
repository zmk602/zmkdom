/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // 添加哨兵节点，简化边界处理
    heights = [0, ...heights, 0];
    const stack = [0]; // 栈中存储的是索引
    let maxArea = 0;
    
    for (let i = 1; i < heights.length; i++) {
        // 当前高度小于栈顶高度时，计算面积
        while (heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    
    return maxArea;
};