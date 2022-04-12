// given -- sequence of integers as an array
// determine -- if removing no more than one element creats an increasing sequence
// example = `[1,5,2,3,1]` returns false
//           `[1,3,2]` returns true
function almostIncreasingSequence(inputArray) {
    let notSequential = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] > inputArray[i + 1]) {
            notSequential++;
        }
    }
    return notSequential <= 0;
}
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3, 2, 1]));
//# sourceMappingURL=almostIncreasingSequence.js.map