// given --> string
// check if it begins and ends with the same character
// example
//   palindromeCheck('aabaa') -> true
//   palindromeCheck('aabac') -> false
//   palindromeCheck('a') -> true
function palindromeCheck(input) {
    let original = input.toLowerCase();
    let reversed = original.split("").reverse().join("");
    return original === reversed;
}
console.log(palindromeCheck("aabaa")); // true
console.log(palindromeCheck("aabac")); // true
console.log(palindromeCheck("a")); // true
//# sourceMappingURL=palindromeCheck.js.map