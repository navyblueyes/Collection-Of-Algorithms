// Goal to change array to ensure sequential order within array
//   each change causes element to increase by one
//
function arrayChange(inputArray) {
    let count = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= inputArray[i + 1]) {
            const difference = (inputArray[i] + 1) - inputArray[i + 1];
            inputArray[i + 1] = inputArray[i] + 1;
            count += difference;
        }
    }
    return count;
}
console.log(arrayChange([1, 1, 1])); // should return 3.... 1 for middle element, 2 for end element
//# sourceMappingURL=arrayChange.js.map