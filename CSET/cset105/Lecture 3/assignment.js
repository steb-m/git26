const prompt = require("prompt-sync")({ sigint: true });
function min(a, b, c) {
    if (a > b) {
        if (b < c) return b;
        else return c;
    } else {
        if (a < c) return a;
        else return c;
    }
}
function isEven(num) {
    if (Math.abs(num) == 0) return true;
    else if (Math.abs(num == -1)) return false;
    else return isEven(Math.abs(num) - 2);
}
export function userInput(message, errorMessage) {
    let input = prompt(message);
    while (isNaN(input)) {
        input = prompt(errorMessage);
    }
    return Number(input);
}
function nthTermSeries1(n) {
    return (2 * n * n - 2 * n + 2);
}
function nthTermFactorial(n) {
    if (n == 0) return 1;
    return n * nthTermFactorial(n - 1);
}
function nthTermFibonacci(n) {
    if (n == 1 || n == 2) return 1;
    else return nthTermFibonacci(n - 1) + nthTermFibonacci(n - 2);
}
function HCF(a, b) {
    let hcf = 1;
    
    for (let i = 1; i <= a; i++) {
        let x = a % i == 0;
        let y = b % i == 0;
        if (x && y) {
            if (i > hcf) {
                hcf = i;
            }
        }
    }
    return hcf
}
function LCM(a, b) {
    return a * b / HCF(a, b);
}
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
export function formatNumber(str) {
    return str.toLocaleString('en-US');
}
function multTable(x, y, a = 1, b = 10) {
    for (let h = x; h <= y; h++) {
        for (let i = a; i < b; i++) {
            console.log(`${h} * ${i} = ${multiply(h, i)}`)
        }
        console.log("");
    }
    
}
// testing all the functions!
function main() {
    let MisterC = userInput("Enter a number:  ", "Please enter a valid numerical value:  ");
    let MisterCTheSecond = userInput("Enter a second number:  ", "Please enter a valid numerical value:  ");
    if (isEven(MisterC)) console.log(`${MisterC} is an even number.`);
    else console.log(`${MisterC} is an odd number.`);

    if (isEven(MisterCTheSecond)) console.log(`${MisterCTheSecond} is an even number.`);
    else console.log(`${MisterCTheSecond} is an odd number.`);

    console.log(`the nth term of series 1 at n = ${MisterC} is ${nthTermSeries1(MisterC)}\nthe nth term of series 1 at n = ${MisterCTheSecond} is ${nthTermSeries1(MisterCTheSecond  )}`);
    prompt();
    console.log(`${MisterC}! = ${formatNumber(nthTermFactorial(MisterC))}\n${MisterCTheSecond}! = ${formatNumber(nthTermFactorial(MisterCTheSecond))}`);
    prompt();
    console.log(`The Fibonacci sequence at n = ${MisterC} is ${nthTermFibonacci(MisterC)}\nThe Fibonacci sequence at n = ${MisterCTheSecond} is ${nthTermFibonacci(MisterCTheSecond)}`);
    prompt();
    console.log(`the HCF of ${MisterC} and ${MisterCTheSecond} is ${HCF(MisterC, MisterCTheSecond)}\nThe LCM of ${MisterC} and ${MisterCTheSecond} is ${LCM(MisterC, MisterCTheSecond)}`)
    prompt();

    while (true) {
        let input = userInput("Please select an option:\n\t1: add\n\t2: subtract\n\t3: multiple\n\t4. divide\n\t5: quit\n\n", "Please enter a number from 1-5 inclusive:   ");
        if (input == 5) break; // breaks out of the loop if input == 5
        let num1 = userInput("Enter the first number:   ", "Please enter a valid numerical value:   ");
        let num2 = userInput("Enter the second number:   ", "Please enter a valid numerical value:   ");
        if      (input == 1) console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
        else if (input == 2) console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
        else if (input == 3) console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
        else if (input == 4) console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
    }
    console.log("program ended.");

    let x = userInput("Enter a number for the multiplication table:   ");
    let y = userInput("Enter a second number for the multiplication table:   ");
    console.log("The table will go from ");
    let from = userInput("", "HEY! That's not a number!   ");
    console.log("to ");
    let to = userInput("", "HEY! That's not a number!   ");

    console.log("Ok! here I go!");
    multTable(x, y, from, to);
    console.log("program ended.")
}
main();