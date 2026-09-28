const prompt = require('prompt-sync')({sigint: true});
const { evaluate } = require('mathjs');
function userInput(message, errorMessage) {
    let input = prompt(message);
    while (isNaN(input) || input.trim() == "") {
        input = prompt(errorMessage);
    }
    return Number(input);
}
function getRandomInt(from, to, inclusive) {
    let h = 0;
    if (inclusive === "yes") {
        h++;
    }
    return Math.floor(Math.random() * (to - from + h)) + from;
}
function createQuestion(difficulty = 1) {
    if (!(difficulty >= 1 && difficulty <= 3)) { 
        // if for whatever reason, difficulty isn't between 1-3 inclusive,
        // catches it and returns an error message
        return "difficulty out of range";
    }
    let operation = "";
    let x;
    let y;
    let z = getRandomInt(1, 5);
    if (z === 1) operation = " + ";
    else if (z === 2) operation = " - ";
    else if (z === 3) operation = " * ";
    else if (z === 4) operation = " / ";
    else              operation = " % ";
    if (difficulty == 1) {
        x = getRandomInt(1, 9, "yes");
        y = getRandomInt(1, 9, "yes");
        
    } else if (difficulty == 2) {
        if (z === 3 || z === 4 || z === 5) { 
            // if multiplication, division or modulus is selected,
            // modify the problem. otherwise, don't.
            x = getRandomInt(1, 9, "yes");
            y = getRandomInt(1, 9, "yes");
        } else {
            x = getRandomInt(10, 99, "yes");
            y = getRandomInt(10, 99, "yes");
        }
    } else {
        if (z === 1 || z === 2){
            x = getRandomInt(1, 999, "yes");
            y = getRandomInt(1, 999, "yes");
        } else {
            x = getRandomInt(10, 99, "yes");
            y = getRandomInt(1, 9, "yes");
        }

    }
    return x + operation + y;
}
function main() {
    let points = 0;
    let lives = 3;
    const CORRECT = 10;
    const INCORRECT = 0;
    console.log("What mode would you like to play?\n1: Max Score\n2: Three-out\n");
    let mode = userInput("Enter mode (1 or 2): ", "Please enter a valid number: ");
    while (mode != 1 && mode != 2) {
        mode = userInput("Please enter 1 for Max score or 2 for Three-out: ", "Please enter a valid number: ");
    }
    console.log("Would you like to play:\n1: Easy Mode\n2. Medium Mode\n3: Hard Mode")
    let difficulty = userInput("Enter difficulty (1-3):  ", "Please enter a number from 1-3 inclusive.")
    if (mode == 1) {
        console.log("\n--- MAX SCORE MODE ---");
        console.log("You have 20 questions. +10 points for a correct answer.\nGood luck!");
        console.log("Because I'm just oh-so generous, I'll let you\nskip a question by typing 'skip' without penalty :)")
        for (let i = 1; i <= 20; i++) {
            let problem = createQuestion(difficulty);
            let correctAnswer = Math.round(evaluate(problem) * 100) / 100;
            console.log(`\nQuestion ${i}: ${problem} = ??? (Round to 2 decimal places if needed)`);
            let answer = prompt(">> ");
            if (answer === "skip") {
                console.log("Question skipped.")
                i--;
                continue
            } 
            if (correctAnswer == answer) {
                console.log("Correct!");
                points += CORRECT;
            } else {
                console.log(`Incorrect! The answer was ${correctAnswer}`);
                points += INCORRECT;
            }
        }
    } else if (mode === 2) {
        console.log("\n--- THREE-OUT MODE ---");
        console.log("Answer as many as you can! 3 wrong answers and you are out.\n+10 points for a correct answer.\nGood luck!");
        let questionNum = 1;
        while (lives > 0) {
            let problem = createQuestion();
            let correctAnswer = Math.round(evaluate(problem) * 100) / 100;
            console.log(`\nQuestion ${questionNum} [Lives: ${lives}]: ${problem} = ?`);
            let answer = userInput("> ", "Please enter a number: ");
            if (answer ==="skip") {
                console.log("You can't skip questions in Three-out mode!");
                continue;
            }
            if (correctAnswer === answer) {
                console.log("Correct!");
                points += CORRECT;
            } else {
                lives--;
                console.log(`Incorrect! The answer was ${correctAnswer}. You lost a life.`);
            }
            questionNum++;
        }
    }
    console.log("\n==============================================");
    console.log("==========        GAME OVER        ===========");
    console.log("==============================================");
    console.log(`          You finished with ${points} points!\n`);
}
main();