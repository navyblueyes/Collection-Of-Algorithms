// given --> array of integers, an integer
// each integer of the array ---> represens coordinates of obstacles
// restricted to a set length of jump
// goal --> return integer that represents minimal set length of jump to avoid obstacles

function avoidObstacles(inputArray: number[]): number {
  inputArray = inputArray.sort((a, b) => a - b);
  const largestArrayVal = inputArray[inputArray.length - 1];

  for (let i = 1; i <= largestArrayVal + 1; i++) {
    if (inputArray.every((element) => element % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
