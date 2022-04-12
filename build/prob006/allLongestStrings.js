// given an array of strings, return another array contraining allof the longests string
function allLongestStrings(inputArray) {
    let longestLength = 0;
    const longestWords = [];
    inputArray.forEach((word) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });
    inputArray.forEach((word) => {
        if (word.length === longestLength) {
            longestWords.push(word);
        }
    });
    return longestWords;
}
console.log(allLongestStrings(["asdf", "asd", "dsa", "weqr"]));
//# sourceMappingURL=allLongestStrings.js.map