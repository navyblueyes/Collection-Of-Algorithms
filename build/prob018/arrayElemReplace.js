// given an array, integer to search for, integer to replace searched with
// example
// [1,2,1], 1 ,3 ... generates.... [3,2,3]
function arrayElemReplace(inputArray, elemToReplace, substitutionElem) {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] == elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}
console.log(arrayElemReplace([1, 2, 1], 1, 3));
//# sourceMappingURL=arrayElemReplace.js.map