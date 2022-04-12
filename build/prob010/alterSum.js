// given array of positive integers
// return array of two integers
//      first integer -- total sum of odd index
//      second integer -- total sum of even index
function alterSum(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i = i + 2) {
        sum1 = sum1 + arr[i];
        sum2 = sum2 + arr[i + 1];
    }
    return [sum1, sum2];
}
console.log(alterSum([54, 45, 84, 74, 78, 84]));
//# sourceMappingURL=alterSum.js.map