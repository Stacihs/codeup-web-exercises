"use strict";

// console.log("Hello form external Javascript");
//
// alert("Welcome to my Website!");
// let userFavColor = prompt("What's your favorite color?");
// alert(`${userFavColor} is my favorite, too!`);

// let movieRentalPerDay = 3;
// let littleMermaidRental = prompt("How many days did you rent Little Mermaid?");
// let brotherBearRental = prompt("How many days did you rent Brother Bear?");
// let herculesRental = prompt("How many days did you rent Hercules?");
// let littleMermaidTotal = littleMermaidRental * 3;
// let brotherBearTotal = brotherBearRental * 3;
// let herculesTotal = herculesRental * 3;
// let totalMovieRental = littleMermaidTotal + brotherBearTotal + herculesTotal;
// alert(`Your total due is $${totalMovieRental.toFixed(2)}`);



// let googleRatePerHour = 400;
// let amazonRatePerHour = 380;
// let facebookRatePerHour = 350;
// let facebookHoursWorked = prompt("How Facebook hours did you work?");
// let googleHoursWorked = prompt("How Google hours did you work?");
// let amazonHoursWorked = prompt("How Amazon hours did you work?");
// let facebookWages = facebookHoursWorked * facebookHoursWorked;
// let googleWages = googleHoursWorked * googleRatePerHour;
// let amazonWages = amazonHoursWorked * amazonRatePerHour;
// let totalWeekPay = facebookWages + googleWages + amazonWages;
// alert(`You earned $${totalWeekPay.toFixed(2)} this week!`);

let classNotFull = true;
let noScheduleConflict = true
let canEnroll = classNotFull && noScheduleConflict;

let premiumMember = true;
let itemsBought = 1;
let offerExpired = !premiumMember && itemsBought < 2;