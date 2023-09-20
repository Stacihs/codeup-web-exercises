function isEven(input) {
    return (input % 2 === 0);
}

function concat(input1, input2) {
    return input1.toString() + input2.toString();
}

function isNumber(input){
    return (typeof input !== "string"
    && typeof input !== "boolean"
    && typeof input !== "object"
    && typeof input !== "undefined"
        && !isNaN(input))
}

function isNumberOrNumericString(input){
    return typeof input !== "boolean"
    && typeof input !== "object"
    && typeof input !== "undefined"
        && isNaN(parseFloat(input))
}