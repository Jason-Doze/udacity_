"use strict";
// multiply
Object.defineProperty(exports, "__esModule", { value: true });

// const multiply = (num1, num2) => {
//   return num1 * num2;
// };

var multiply = function (num1, num2) {
    return num1 * num2;
};

// add
// const sum = (num1, num2) => {
//   return num1 + num2;
// };

var sum = function (num1, num2) {
    return num1 + num2;
};

// divide
// const divide = (num1, num2) => {
//   return num1 / num2;
// };

var divide = function (num1, num2) {
    return num1 / num2;
};

// subtract
// const subtract = (num1, num2) => {
//   return num1 - num2;
// };

var subtract = function (num1, num2) {
    return num1 - num2;
};

// square
// const square = (num) => {
//   return num * num;
// };

var square = function (num) {
    return num * num;
};

exports.default = {
    multiply: multiply,
    subtract: subtract,
    divide: divide,
    sum: sum,
    square: square,
};
