const prompt = require('prompt-sync')();
function userInput(message, errorMessage) {
    let input = prompt(message);
    while (isNaN(input)) {
        input = prompt(errorMessage);
    }
    return Number(input);
}
function nthTerm(n) {
    let str = ""
    let x = 2;
    for (let i = 0; i < n; i++) {
        x += 4*i;
        if (i == n - 1 ) str += x;
        else str += x + ", ";
    }
    return str;
}
function nthTermFactorial(n) {
    let str = "";
    let x = 1;
    for (let i = 1; i <= n; i++) {
        x *= i
        if (i == n) str += x;
        else str += x + ", ";
    }
    return str;
}
console.log(nthTerm(10));
console.log(nthTermFactorial(5));
console.log(nthTermFactorial(10));

let x = userInput("X:   ", "OI BRUV THAT'S NOT A NUMBAHHHHH")
let a = userInput("A:   ", "OI BRUV THAT'S NOT A NUMBAHHHHH")
let b = userInput("B:   ", "OI BRUV THAT'S NOT A NUMBAHHHHH")

function multTables(x, a, b) {
    let str = "";
    for (let i = a; i <= b; i++) {
        str += `${x} * ${i} = ${x*i}\n`
    }
    return str;
}

console.log(multTables(x, a, b));