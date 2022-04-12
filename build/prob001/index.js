// Sorted Array Minimization
// Reduces a sorted array using
//    abs(array[0] - x) + abs(array[1] - x) + ... + abs(array[array.length - 1] - x)
// Example
//    [4, 7, 8, 9] --  7
//    [1, 2, 4, 6, 7] -- 4
//    [5,  6,  7,  8] -- 6
function arrayMinimization(a) {
    const isEven = a.length % 2 === 0;
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}
//# sourceMappingURL=index.js.map