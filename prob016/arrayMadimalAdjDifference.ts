// Given an array of integers, find the max diff between any two adjacent elements

// [2, 4, 1, 0] should return 3

function arrayMaximalAdjDifference(inputArray: number[]): number {
  let startDiff = 0;
  let maxDiff = 0;

  startDiff = Math.abs(inputArray[1] - inputArray[0]);

  for (let i = 1; i < inputArray.length; i++) {
    let temp = Math.abs(inputArray[i + 1] - inputArray[i]);
    if (temp > maxDiff) {
      maxDiff = temp;
    }
  }
  return maxDiff;
}

console.log(arrayMaximalAdjDifference([2, 4, 1, 0]));
