// given a single integers  consiting of two digits ... return sum of its digits

//     example ... n=26 returns 8

// plan -- split ...parse into string... reassign to values ... add

export default function twoDigitAddition(input: number): number {
  if (input < 10 || input > 99) {
    Error("input needs to be between 10 and 99")
  }
  let medium = input.toString()
  let firstInt = parseInt(medium[0], 10)
  let secondInt = parseInt(medium[1], 10)
  return firstInt + secondInt
}
