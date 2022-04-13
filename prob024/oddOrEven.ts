// given -> string
// return --> `odd` `even` `not a digit`

export function oddOrEven(input: number | String): number | String {
  return (isNaN(input) ? "not a digit" : input % 2 === 0 ? "even" : "odd");
}

console.log(oddOrEven("5")); // odd
console.log(oddOrEven("8")); // even
console.log(oddOrEven("q")); // not a digit
