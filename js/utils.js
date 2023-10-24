function isEven(input) {
    return (input % 2 === 0);
}

function concat(input1, input2) {
    return input1.toString() + input2.toString();
}

function isNumber(input) {
    return (typeof input !== "string"
        && typeof input !== "boolean"
        && typeof input !== "object"
        && typeof input !== "undefined"
        && !isNaN(input)
    );
}

function isNumberOrNumericString(input) {
    return (typeof input !== "boolean"
        && typeof input !== "object"
        && typeof input !== "undefined"
        && isNaN(parseFloat(input))
    );
}

function isANumber(input) {
    if(typeof input === "boolean" || input === null) {
        return false;
    }
    return !isNaN(input);
}

function avgOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function isAvgWhole(numsArr) {
    return avgOfArray(numsArr) % 1 === 0;
}

function findHighestPrice(objArr) {
    let highestPrice = 0;
    for (let obj of objArr) {
        if(obj.price > highestPrice) {
            highestPrice = obj.price;
        }
    }
    return highestPrice;
}

const convertDateTime = (dt) => {
    const timeStamp = dt;
    const milliseconds = timeStamp * 1000;
    const dateObject = new Date(milliseconds);
    const readableDate = dateObject.toLocaleString();
    console.log(readableDate);
}