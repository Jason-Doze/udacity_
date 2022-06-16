"use strict";
// Concatenate two arrays
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// const concatArr = (arr1, arr2) => {
//   return [...arr1, ...arr2];
// };

// Concatenate two arrays
var concatArr = function (arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
};

// Add numbers in an array
// const addArr = (arr) => {
//   let total = 0;
//   arr.forEach((x) => {
//     total += x;
//   });
//   return total;
// };

var addArr = function (arr) {
    var total = 0;
    arr.forEach(function (x) {
        total += x;
    });
    return total;
};

// Find the largest number in an array
// const lgNum = (arr) => {
//   let largest = 0;
//   arr.forEach((x) => {
//     if (x > largest) {
//       largest = x;
//     }
//   });
//   return largest;
// };

var lgNum = function (arr) {
    var largest = 0;
    arr.forEach(function (x) {
        if (x > largest) {
            largest = x;
        }
    });
    return largest;
};

// Remove the 3rd item from an array
// const cut3 = (arr) => {
//   arr.splice(2, 1);
//   return arr;
// };

var cut3 = function (arr) {
    arr.splice(2, 1);
    return arr;
};
exports.default = {
    concatArr: concatArr,
    addArr: addArr,
    lgNum: lgNum,
    cut3: cut3,
};
