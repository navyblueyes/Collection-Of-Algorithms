// given an array of integers, find the minmal possible sum of `k` consecutive elements
// if given `inputArray` of [2,3,1,5,6] and `k` of 2 ... will run...
//   2 + 3 = 5    --> first sum
//   3 + 1 = 8
//   1 + 5 = 6
// will assume max sum to be 8
function arrayMaxConsecutiveSum(inputArray, k) {
    let firstSum = 0;
    let max = 0;
    //getting the first sum
    for (let i = 0; i < k; i++) {
        firstSum += inputArray[i];
    }
    max = firstSum;
    //getting each calculation based off of first sum
    for (let i = k; i < inputArray.length; i++) {
        firstSum -= inputArray[i - k];
        firstSum += inputArray[i];
        if (firstSum > max) {
            max = firstSum;
        }
    }
    return max;
}
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
//# sourceMappingURL=arrayMaxSum.js.map