// Given - `n` children and `m` total candies
// Goal - determine total candy to ascertain equal candy amoung each child
//
//

function candy(n: number, m: number): number {
  return Math.floor(m / n) * n;
}

console.log(candy(3, 10));
