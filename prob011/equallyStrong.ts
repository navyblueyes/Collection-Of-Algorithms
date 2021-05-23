// given strength of each arm of a person
// compare two people if people are equally strong

function equallyStrong(
  yourLeft: number,
  yourRight: number,
  friendLeft: number,
  friendRight: number
): boolean {
  const yourWeakest = yourLeft <= yourRight ? yourRight : yourLeft
  const yourStrongest = yourLeft <= yourRight ? yourLeft : yourRight
  const friendWeakest = friendLeft <= friendRight ? friendRight : friendLeft
  const friendStrongest = friendLeft <= friendRight ? friendLeft : friendRight

  return yourStrongest === friendStrongest && yourWeakest === friendWeakest
}

console.log(equallyStrong(10, 15, 15, 10))
console.log(equallyStrong(15, 10, 15, 10))
console.log(equallyStrong(15, 10, 15, 9))
