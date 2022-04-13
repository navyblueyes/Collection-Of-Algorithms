// Given -- array of 2000 integers... perform two operations
//  1. odd iterations -- return sum of each pair of consecutive elements
//  2. even iterations -- return product of each pair of consecutive elements
// Returns an array of a single element
//   [1,2,3,4,5,6,7,8]
//    --> first iteration returns  [3, 7, 11, 15]
//    --> second iteration returns [21, 165]
//    --> third iteration returns  [186]
export default function arrayConversion(inputArray: number[]): number[]{
  let count = 0;

  while (inputArray.length > 1) {
    inputArray = runIteration(inputArray, count)
    count++;
  }
  return inputArray
}


function runIteration(thisArray: number[], count: number): number[] {
  let newArray = [];
  if (!(count % 2)) {
    for (let i = 0; i < thisArray.length; i += 2) {
      newArray.push(thisArray[i] + thisArray[i + 1]);
    }
  } else {
    for (let i = 0; i < thisArray.length; i += 2) {
      newArray.push(thisArray[i] * thisArray[i + 1]);
    }
  }
  return newArray;
}
