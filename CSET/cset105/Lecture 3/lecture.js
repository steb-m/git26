// John Maher

const prompt = require("prompt-sync")({ sigint: true });

function main() {
    let input = prompt("Please enter a number: ");
    while (isNaN(input)) {
        input = prompt("Please enter a valid number: ");
    }
}

function differenceOfSquares(a, b) {
    return (a * a - b * b);
}

function next() {
    let x = prompt("Please enter a number: ");
    while (isNaN(x)) {
        input = prompt("Please enter a valid number: ");
    }

    let y = prompt("Please enter a number: ");
    while (isNaN(y)) {
        input = prompt("Please enter a valid number: ");
    }

    console.log(`The difference of squares between ${x} and ${y} is ${differenceOfSquares(x, y)}`);
}

function sumOfThree(a, b, c) {
    return a + b + c;
}

function third() {
    let x = prompt("Please enter a number:  ");
    while (isNaN(x)) {
        x = prompt("Please enter a valid number: ");
    }    
    return Number(x); // the "return" keyword passes the number entered in here into the variables where it was called outside.
              // x is declared, assigned a number, and then is stored into a, b, and c.
}

let a = third();
let b = third();
let c = third();

console.log(sumOfThree(a, b, c));

function add(a, b, c) {
    return a + b + c;
}
console.log(add(5, 5, 14));

function square(a) {
    return a * a;
}
console.log(square(14));

let x = 10;
if (true) {
    let y = 5;
    console.log(x + y);
}
// console.log(x + y);  y isn't defined outside the if statement, therefore an error occurs here. The var keyword helps here. 


const cube = (x) => {return x * x * x;} // example of an arrow function

function power(base, exponent) { // example of a recursive function
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

function minus(a, b) { // example of a function with optional arguments
    if (b == undefined) {
        return -a;
    } else {
        return a - b;
    }
}

function power2(base, exponent = 2) { // example of a function with auto assigning value if a variable isn't specified a value
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(4, 3));

function fartfartfart(base, power) { //recursive function without recursion
    let product = base;
    for (let i = 0; i < power; i++) {
        product *= base;
    }
    return product;
}