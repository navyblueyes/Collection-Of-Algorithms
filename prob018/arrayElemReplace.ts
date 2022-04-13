// given an array, integer to search for, integer to replace searched with

// example
// [1,2,1], 1 ,3 ... generates.... [3,2,3]

export default function arrayElemReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == elemToReplace) {
      inputArray[i] = substitutionElem;
    }
  }
  return inputArray;
}

console.log(arrayElemReplace([1, 2, 1], 1, 3)); // [3,2,3]
