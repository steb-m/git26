
const prompt = require("prompt-sync")({ sigint: true }); 

    let n = 8; // size of

    let hash = "";
    for (let i = 0; i < 7; i++) {
        hash += "#";
        console.log(hash);
    }
    for (let i = 1; i <= 100; i++) {
        let fizzy = "";
        if (i % 3 == 0) {
            fizzy += "Fizz";
        }
        if (i % 5 == 0) {
            fizzy += "Buzz";
        }
        if (fizzy == "") {
            console.log(i);
        } else {
            console.log(fizzy);
        }
    }
    prompt()
    let hashes = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i + j) % 2 == 0) {
                hashes += "#";
            } else {
                hashes += " ";
            }
        }
        hashes += "\n";
        
    }
    console.log(hashes);

    prompt();
    for (let i = 1; i <= 50; i++) {
        console.log(i);
    }
    prompt();
    for (let i = 1; i <= 25; i++) {
        console.log(i)
    }
    prompt();
    for (let i = 2; i <= 25; i += 2) {
        console.log(i);
    }
    prompt();
    for (let i = 0; i <= 25; i += 3) {
        if (i % 3 == 0) {
            console.log(i)
        }
    }
    prompt();
    for (let i = 0; i <= 50; i += 5) {
        console.log(i);
    }
    prompt();
    for (let i = 0; i <= 50; i++) {
        let a = i % 2 == 0;
        let b = i % 3 == 0;
        if (a !== b) {
            console.log(i);
        }
    }
    prompt();
    for (let i = 0; i <= 50; i++) {
        let a = i % 2 == 0;
        let b = i % 3 == 0;
        let c = i % 12 == 0;
        if (!(a === b) && !c) {
            console.log(i);
        }
    }

    for (let i = 50; i >= 1; i--) {
        console.log(i);
    }
    prompt();
    for (let i = 25; i >= 1; i--) {
        console.log(i)
    }
    prompt();
    for (let i = 24; i >= 2; i -= 2) {
        console.log(i);
    }
    prompt();
    for (let i = 25; i >= 1; i--) {
        if (i % 3 == 0) {
            console.log(i)
        }
    }
    prompt();
    for (let i = 50; i >= 0; i -= 5) {
        console.log(i);
    }
    prompt();
    for (let i = 50; i >= 0; i--) {
        let a = i % 2 == 0;
        let b = i % 3 == 0;
        if (a !== b) {
            console.log(i);
        }
    }
    prompt();
    for (let i = 50; i >= 0; i--) {
        let a = i % 2 == 0;
        let b = i % 3 == 0;
        let c = i % 12 == 0;
        if (!(a === b) && !c) {
            console.log(i);
        }
    }
    prompt();
    for (let j = 1; j <= 10; j++) {
        console.log(`3 * ${j} = ${i * j}`)
    }
    prompt();
    for (let j = 1; j <= 10; j++) {
        console.log(`17 * ${j} = ${17 * j}`)
    }