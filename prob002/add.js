"use strict";
// Adding an unlimited number of parameters
exports.__esModule = true;
exports.add = void 0;
// Reduces a unsorted array using
//    num + num +....
// Example
//    [4, 7, 8] --  19
//    [1, 6, 7] -- 14
//    [5,  6,  7,  8] -- 26
function add() {
    var param1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param1[_i] = arguments[_i];
    }
    var total = 0;
    param1.forEach(function (num) {
        total += num;
    });
    return total;
}
exports.add = add;
