// given strength of each arm of a person
// compare two people if people are equally strong

function equallyStrong(
  yourLeft: number,
  yourRight: number,
  friendLeft: number,
  friendRight: number
): boolean {
  let you = yourLeft + yourRight
  let friend = friendLeft + friendRight
  if (you === friend) {
    return true
  } else {
    return false
  }
}

console.log(equallyStrong(10, 15, 15, 10))
console.log(equallyStrong(15, 10, 15, 10))
console.log(equallyStrong(15, 10, 15, 9))
