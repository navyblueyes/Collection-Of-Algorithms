// given array of positive integers
// return array of two integers
//      first integer -- total sum of odd index
//      second integer -- total sum of even index

export default function alterSum(arr: number[]): number[] {
  let sum1: number = 0
  let sum2: number = 0
  for (let i = 0; i < arr.length; i = i + 2) {
    sum1 = sum1 + arr[i]
    sum2 = sum2 + arr[i + 1]
  }
  return [sum1, sum2]
}
