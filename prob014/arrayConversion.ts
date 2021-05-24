// Given -- array of 2000 integers... perform two operations
//  1. odd iterations -- return sum of each pair of consecutive elements
//  2. even iterations -- return product of each pair of consecutive elements
// Returns an array of a single element
//   [1,2,3,4,5,6,7,8]
//    --> first iteration returns  [3, 7, 11, 15]
//    --> second iteration returns [21, 165]
//    --> third iteration returns  [186]
function arrayConversion(inputArray: number[]): number[]{
  let count = 0;

  while (inputArray.length > 1) {
    if (!(count % 2)) {
      oddIteration(inputArray);
      count++;
    } else {
      evenIteration(inputArray);
      count++;
    }
  }
  return inputArray
}


function oddIteration(oddArray: number[]): number[] {
  let newOddArray = [];
  for (let i = 0; i < oddArray.length; i+=2) {
    newOddArray.push(oddArray[i] + oddArray[i + 1]);
  }
  return newOddArray;
}
function evenIteration(evenArray: number[]): number[] {
  let newEvenArray = [];
  for (let i = 0; i < evenArray.length; i+=2) {
    newEvenArray.push(evenArray[i] * evenArray[i + 1]);
  }
  return newEvenArray;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
