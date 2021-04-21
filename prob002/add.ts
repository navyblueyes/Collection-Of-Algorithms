// Adding an unlimited number of parameters

// Reduces a unsorted array using
//    num + num +....

// Example
//    [4, 7, 8] --  19
//    [1, 6, 7] -- 14
//    [5,  6,  7,  8] -- 26

function add(...param1: number[]): number {
  let total = 0;

  param1.forEach((num) => {
    total += num;
  });

  return total;
}

console.log(add(4, 7, 8));
console.log(add(5, 6, 7, 8));
