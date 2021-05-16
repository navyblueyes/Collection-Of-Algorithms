// given a string
// replace each character with next English alphabet letter

// need to shift to array

function alphaShift(inputString: string): string {
  const alphabet: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

  let stringArray = inputString.split("")
  let newStringArr = []
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] !== "z") {
      newStringArr.push(alphabet[alphabet.indexOf(stringArray[i]) + 1])
    } else {
      newStringArr.push("z")
    }
  }
  return newStringArr.join("")
}

console.log(alphaShift("crazy"))
