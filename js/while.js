"use strict";

//WHILE LOOP

let i = 1;
while (i < 33000) {
    i *= 2;
    console.log(i);
}


// DO WHILE

let conesToSell = Math.floor(Math.random() * 50) + 50;

do {
    let conesBought = Math.floor(Math.random() * 5) + 1;
    conesToSell -= conesBought;
    if (conesToSell > conesBought) {
        console.log(`${conesBought} cones sold...`);
    } else if (conesToSell === 0) {
        console.log(`Yay! I sold them all!`);
    } else if (conesToSell < conesBought && conesToSell > 0) {
        console.log(`Cannot sell you ${conesBought} I only have ${conesToSell}...`);
    }
}
while (conesToSell >= 0) ;