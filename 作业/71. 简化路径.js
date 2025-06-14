/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const parts = path.split('/').filter(part => part !== '' && part !== '.');
    
    for (const part of parts) {
        if (part === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(part);
        }
    }
    
    return '/' + stack.join('/');
};