// given array of positive integers
// return array of two integers
//      first integer -- total sum of odd index
//      second integer -- total sum of even index
console.log(`hellow`)

function alterSum(arr: number[]): number[] {
  let sum1: number = 0
  let sum2: number = 0
  for (let i = 0; i < arr.length; i + 2) {
    sum1 = sum1 + arr[i]
    sum2 = sum2 + arr[i + 1]
  }
  console.log(`${sum1} ${sum2}`)
  return [sum1, sum2]
}

console.log(alterSum([54, 45, 84, 74, 78, 84]))
