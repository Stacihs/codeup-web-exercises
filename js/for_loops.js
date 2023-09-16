"use strict";

// EXERCISE 1
function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// showMultiplicationTable(7);

// TODO make all functions
// EXERCISE 2

for (let i = 1; i <= 10; i++) {
    let randomNum = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
    if (randomNum % 2 === 0) {
        console.log(`${randomNum} is even`);
    } else {
        console.log(`${randomNum} is odd`);
    }
}

//EXERCISE 3
//     for (let i = 1; i <= 9; i++) {
//         let iString = i.toString();
//         console.log(iString.repeat(i));
//     }


// EXERCISE 4
//     for (let i = 105; i > 5; i - 5) {
//         console.log(i -= 5);
//     }

