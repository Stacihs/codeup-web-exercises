"use strict";


// Description:
//
//     Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."
//
//     These dots at the end also add to the string length.
//
//     For example, trim("Creating kata is fun", 14) should return "Creating ka..."
//
// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.
//
// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"
//
// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.
//
// e.g. trim("He", 1) should return "H...", because 1 <= 3
//
// Requested maximum length will be greater than 0. Input string will not be empty.


// function trim(str, maxStrLength) {
//     if (str.length > maxStrLength) {
//         return str.substring(0, str.length - maxStrLength - 4) + "...";
//     } else if (maxStrLength <= 3) {
//         return str[0] + "...";
//     } else if (str.length <= maxStrLength) {
//         return str;
//     }
// }

// console.log(trim('Good Morning', 10));

// function that accepts an array of numeric values and returns the avg of those values

function avgOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const myArr = [13, 5, 9, 8.6];
// console.log(avgOfArray(myArr));

// average of all elements is a whole number

function isAvgWhole(numsArr) {
    return avgOfArray(numsArr) % 1 === 0;
}

// console.log(isAvgWhole(myArr));

// return the sum of pets property for all people in a array of objects of people
function totalPets(objsArr) {
    let sumOfPets = 0;
    objsArr.forEach(person => sumOfPets += person.pets);
    return sumOfPets;
}

// for (let person of objsArr) {
//     sumOfPets += person.pets
// }
//  return sumOfPets;
// }