function calculate(num1, num2, operation) {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (operation === '+' || operation === 'plus' || operation === 'added to'){
        result = n1 + n2;
    } else if (operation === '-' || operation === 'minus' || operation === 'subtracted from'){
        result = n1 - n2;
    } else if (operation === 'x' || operation === 'times' || operation === 'X' || operation === 'multiplied by'){
        result = n1 * n2;
    } else if (operation === '/' || operation === 'divided by'){
        result = n1 / n2;
    } else if (operation === '%' || operation === 'mod' || operation === 'modulus'){
        result = n1 % n2;
    } else {
        console.log(n1)
        console.log(operation)
        result = 'Sorry, that\'s not a mathematical operation!'
    }

  return result
}


module.exports = calculate;