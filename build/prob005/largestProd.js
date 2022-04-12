// Explanation ---
//    takes input array of numbers
//    finds the largets product of two numbers
// Plan
//    check input for less than 1 input
//    for loop...
//    check for negative and break
function largestProduct(inputArray) {
    if (inputArray.length <= 1) {
        Error("Input must be an array of two or more integers");
    }
    let bestProduct = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
        if (inputArray[i] <= 0 || inputArray[i + 1] <= 0) {
            continue;
        }
        let product = inputArray[i] * inputArray[i + 1];
        bestProduct = bestProduct < product ? product : bestProduct;
    }
    return bestProduct;
}
console.log(largestProduct([2, 5, 7, 8, 12, 23]));
//# sourceMappingURL=largestProd.js.map