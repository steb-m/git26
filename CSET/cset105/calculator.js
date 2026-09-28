const prompt = require("prompt-sync")({ sigint: true }); 
console.log("Please select an option:\n\t1: add\n\t2: subtract\n\t3: multiple\n\t4. divide\n\t5: quit\n\n");
let num1 = 0;
let num2 = 0;
let input;

do {
    input = Number(prompt("Select an option (1-5): "));

    while (!(input > 0 && input < 6)) {
        input = Number(prompt("Please select a valid option (1-5): "));
    }

    if (input === 5) {
        break;
    }
    
    let num1 = Number(prompt("Enter the first number: "));

    while (isNaN(num1)) {
        num1 = Number(prompt("Please enter a valid number: "));
    }

    let num2 = Number(prompt("Enter the second number: "));

    while (isNaN(num2)) {
        num2 = Number(prompt("Please enter a valid number: "));
    }

    if (input === 1) {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    } else if (input === 2) {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    } else if (input === 3) {
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    } else if (input === 4) {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }

} while (input !== 5);