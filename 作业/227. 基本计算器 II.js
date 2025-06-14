/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let num = 0;
    let sign = '+';
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char >= '0' && char <= '9') {
            num = num * 10 + parseInt(char);
        }
        
        if ((char !== ' ' && isNaN(char)) || i === s.length - 1) {
            switch (sign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                case '/':
                    stack.push(Math.trunc(stack.pop() / num));
                    break;
            }
            sign = char;
            num = 0;
        }
    }
    
    return stack.reduce((a, b) => a + b, 0);
};