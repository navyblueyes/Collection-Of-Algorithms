// given a string
// replace each character with next English alphabet letter

// need to shift to array

function alphaShift(inputString: string): string {
  let stringArray = inputString.split("")
  let newString = ""
  for (let i = 0; i < stringArray.length; i++) {
    newString.concat(String.fromCharCode(stringArray[i].charCodeAt(0) + 1))
  }
  return newString
}

console.log(alphaShift("crazy"))
