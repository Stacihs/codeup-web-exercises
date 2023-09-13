"use strict";
// *******EXTRA CONDITIONALS PRACTICE*********
// ---
// ### SWITCH STATEMENTS
//
// Let's make an application which helps a user input *validated* specs on a vehicle they are trying to sell:
// - This will involve multiple switch statements and functions
// - Orchestrate the statements in a central function that is responsible for calling and checking for errors
//     each switch statement should be wrapped in a function which accepts the user's input as a string parameter and return that same string if it is validated
//     ie: `function getBodyStyle(input){return input}`
//
//
//     - For user input, either use the browser's prompt/confirm/alert methods or mock up user input by hard-coding values
//
//
//     - The user should be able to enter their
//     - Body style (2D, 4D, etc)
//     - Vehicle type (sports car, sedan, compact, truck, etc)
//     - Vehicle color
//
//
//     - Each switch statement should confirm the user's choice in a logging statement
//
//
//     - The point of this is to validate what the user enters.
//     - If they do not enter an acceptable input, the DEFAULT statement will handle this as an error
//         ie: default: `"error: " + vehicleType + " not recognized"`;
//         - If this occurs, call the related function again (see: recursion) until the user enters a correct choice
//         - HINT: a way you can check for errors is to see if the string contains the word "error"
//
//
//         - After all switch statement functions successfully return the user's input, concatenate them all into a nicely-formatted string and return all data to the user
function sellMyCar() {

    function getBodyStyle(carBody) {
        carBody = prompt("What's your car's body style?").toUpperCase();
        switch (carBody) {
            case "2D":
                return console.log(carBody);
            case "4D":
                return console.log(carBody);
            default:
                alert(`Error: ${carBody} not recognized`);
                getBodyStyle(carBody);
        }
    }

   function getCarType(carType) {
        carType = prompt("What type of car do you have?").toUpperCase();
        switch (carType) {
            case "SEDAN":
                return console.log(carType);
            case "SPORTS UTILITY":
                return console.log(carType);
            case "MOTORCYCLE":
                return console.log(carType);
            default:
                alert(`Error: ${carType} not recognized`);
                getCarType(carType);
        }
    }

    function getCarColor(carColor) {
        carColor = prompt("What's the color of your car?").toUpperCase();
        switch (carColor) {
            case "BLACK":
                return console.log(carColor);
            case "RED":
                return console.log(carColor);
            case "WHITE":
                return console.log(carColor);
            default:
                alert(`Error: ${carColor} not recognized`);
                getCarColor(carColor);
        }
    }

    function announceDetails() {
        alert(`You're selling a ${carBody} ${carType} that's ${carColor}.`);
    }
    announceDetails();
    getCarColor();
    type();
    color();
}

sellMyCar();



