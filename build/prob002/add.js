"use strict";
// Adding an unlimited number of parameters
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
// Reduces a unsorted array using
//    num + num +....
// Example
//    [4, 7, 8] --  19
//    [1, 6, 7] -- 14
//    [5,  6,  7,  8] -- 26
function add(...param1) {
    let total = 0;
    param1.forEach((num) => {
        total += num;
    });
    return total;
}
exports.add = add;
//# sourceMappingURL=add.js.map