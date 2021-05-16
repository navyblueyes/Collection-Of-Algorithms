// given a string
// compare individual letters to see if sequential

function stringSeqCheck(str1: string): boolean {
  const stringArray1: string[] = str1.split("")
  const charValues: number[] = []

  // store character codes in charValues
  stringArray1.forEach((stringChar: string) => {
    charValues.push(stringChar.charCodeAt(0))
  })

  // check for duplicates
  if (new Set(charValues).size !== charValues.length) {
    return false
  }

  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false
    }
  }

  return true
}

console.log(stringSeqCheck("asdf"))
console.log(stringSeqCheck("adfs"))
console.log(stringSeqCheck("adfffs"))

// const alphabet = {
//   a: "b",
//   b: "c",
//   c: "d",
//   d: "e",
//   e: "f",
//   f: "g",
//   g: "h",
//   h: "i",
//   i: "j",
//   j: "k",
//   k: "l",
//   l: "m",
//   m: "n",
//   n: "o",
//   o: "p",
//   p: "q",
//   q: "r",
//   r: "s",
//   s: "t",
//   t: "u",
//   u: "v",
//   v: "w",
//   w: "x",
//   x: "y",
//   y: "z",
//   z: "a",
// }
