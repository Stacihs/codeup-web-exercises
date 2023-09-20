"use strict";
// TODO Add comments
//BREAK AND CONTINUE
function pickANumber() {
    // TODO FIX PROMPT
    let userNumber = parseInt(prompt("Enter an odd number between 1 and 50"));
    do {
        parseInt(prompt("Enter an odd number between 1 and 50"));
        if (userNumber < 1 || userNumber > 50 || userNumber % 2 === 0) {
            break;
        }
    }
    while (true);

    console.log(`Number to skip is: ${userNumber}`);
    console.log("");
    for (let i = 1; i < 50; i++) {
        if (i % 2 === 0) {
            continue;
        }
        if (i === userNumber) {
            console.log(`Yikes! Skipping number: ${userNumber}`);
            continue;
        }
        console.log(`Here is an odd number: ${i}`);
    }
    return userNumber;
}

console.log(pickANumber());