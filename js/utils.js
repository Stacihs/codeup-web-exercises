// function evenOrOdd(number) {
//     if (!isNumber(number)) {
//         return "That is not a number.";
//     } else if (number % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }

function isTrue(input) {
    return (input === true);
}

function isFalse(input) {
    return (input === false);
}

function not(input) {
    return !input;
}

function addOne(input) {
    return Number(input) + 1;
}

function isEven(input) {
    return (input % 2 === 0);
}

function isIdentical(item1, item2) {
    return (item1 === item2);
}

function isEqual(input1, input2) {
    return input1 == input2;
}

function or(input1, input2) {
    return input1 || input2;
}

function and(input1, input2) {
    return input1 && input2;
}

function concat(input1, input2) {
    return input1.toString() + input2.toString();
}