// input integer (totalRingNumbers)  and integer (startingNumber)
// goal -- find opposing ring number (180 degrees) from startingNumber

// assume --> all ring numbers are equal distant

// example of 10 totalRingNumber ring --> ../img/prob029.jpg

// example --> 10 2 should return 7

export function opposingRingNumber(
  totalRingNumbers: number,
  startingNumber: number
): number {
  let ringArray = Array(totalRingNumbers)
    .fill()
    .map((_, i) => i);
  return ringArray[startingNumber + totalRingNumbers / 2];
}

console.log(opposingRingNumber(10, 2));
