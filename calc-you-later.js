const calculate = require('./calculate')

const readline =
require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("What is your equation?\n",
  (num1, num2, operation) => {
    // readline.setPrompt("");
    // readline.prompt();
    readline.on('line', (userInput) => {
      console.log(calculate(num1, num2, operation))
      readline.close()
  })})