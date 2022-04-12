// given an array of strings, return another array contraining allof the longests string

function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  const longestWords:string[] = [];

  inputArray.forEach((word: string) => {
    longestLength = longestLength < word.length ? word.length : longestLength
  })

  inputArray.forEach((word: string) => {
    if (word.length === longestLength) {
      longestWords.push(word)
    }
  })

  return longestWords;
}

console.log(allLongestStrings(["asdf", "asd", "dsa", "weqr"]))
