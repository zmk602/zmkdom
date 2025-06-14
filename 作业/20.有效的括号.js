/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (const char of s) {
        if (map[char]) {
            // 如果是左括号，压入栈中
            stack.push(char);
        } else {
            // 如果是右括号，检查是否与栈顶左括号匹配
            if (stack.length === 0 || map[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    // 检查栈是否为空（所有左括号都已匹配）
    return stack.length === 0;
};