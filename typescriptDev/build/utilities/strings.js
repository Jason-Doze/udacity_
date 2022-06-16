"use strict";
// const concat = (str1, str2) => {
//   return str1 + str2;
// };
Object.defineProperty(exports, "__esModule", { value: true });
var concat = function (str1, str2) {
    return str1 + str2;
};

// const capitalize = (str) => {
//   const newStr = str
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.substr(1))
//     .join(" ");
//   return newStr;
// };

var capitalize = function (str) {
    var newStr = str
        .split(" ")
        .map(function (word) { return word[0].toUpperCase() + word.substr(1); })
        .join(" ");
    return newStr;
};

// const upperCase = (str) => {
//   return str.toUpperCase();
// };

var upperCase = function (str) {
    return str.toUpperCase();
};

// const lowerCase = (str) => {
//   return str.toLowerCase();
// };

var lowerCase = function (str) {
    return str.toLowerCase();
};

exports.default = {
    concat: concat,
    capitalize: capitalize,
    upperCase: upperCase,
    lowerCase: lowerCase,
};
