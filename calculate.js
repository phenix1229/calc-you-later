function calculate(num1, num2, operation) {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (operation === '+' || operation === 'plus'){
        result = n1 + n2;
    } else if (operation === '-' || operation === 'minus'){
        result = n1 - n2;
    } else if (operation === 'x' || operation === 'times' || operation === 'X'){
        result = n1 * n2;
    } else if (operation === '/'){
        result = n1 / n2;
    } else if (operation === '%' || operation === 'mod' || operation === 'modulus'){
        result = n1 % n2;
    } else {
        result = 'Sorry, that\'s not a mathematical operation!'
    }

  return result
}


module.exports = calculate;