// Given --> array of integers
// Iterate one position at a time
// If previous position has a smaller value than current [to the left of it]... replace it current value with that of the lower value
// If previous position is GREATER than the current... replace with `-1`

// example
//   input of `[3,5,2,4,5]` returns `[-1,3,-1,2,4]

// constraints
//   3 <= array.length <= 15
//   1 <= array[i] <= 200

function arrayPrevLess(items: number[]): number[] {
  let temp = [...items];
  temp[0] = -1;
  for (let i = 1; i < items.length; i++) {
    let curr = i;
    let prev = i - 1;
    if (items[prev] < items[curr]) {
      temp[curr] = items[prev];
    } else {
      temp[curr] = -1;
    }
  }
  return temp;
}

console.log(arrayPrevLess([3, 5, 2, 4, 5]));
