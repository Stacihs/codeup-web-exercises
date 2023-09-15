"use strict";

//BREAK AND CONTINUE

// let userNumber = parseInt(prompt("Enter an odd number between 1 and 50"));
//
// console.log(`Number to skip is: ${userNumber}`);
// console.log("");
//
// for (let i = 1; i < 50; i++) {
//     if (userNumber < 1 || userNumber > 50 || userNumber % 2 === 0) {
//         userNumber = parseInt(prompt("Enter an odd number between 1 and 50"));
//         break;
//     }
//
//     if (i % 2 === 0) {
//         continue;
//     }
//
//     if (i === userNumber) {
//         console.log(`Yikes! Skipping number: ${userNumber}`);
//         continue;
//     }
//
//     console.log(`Here is an odd number: ${i}`);
// }