// Given -> two strings
// Goal --> find number of common characters between them
// Example ---> `aabcc`, `adcaa` -> 3
function charlist(chars) {
    const wordCount = {};
    for (let i = 0; i < chars.length; i++) {
        if (wordCount.hasOwnProperty(chars[i])) {
            wordCount[chars[i]]++;
        }
        else {
            wordCount[chars[i]] = 1;
        }
    }
    return wordCount;
}
function findCommonChar(input1, input2) {
    const chars1 = input1.split("");
    const chars2 = input2.split("");
    const s1CharCount = charlist(chars1);
    const s2CharCount = charlist(chars2);
    let total = 0;
    for (const prop in s1CharCount) {
        if (s2CharCount.hasOwnProperty(prop)) {
            if (s2CharCount[prop] < s1CharCount[prop]) {
                total += s2CharCount[prop];
            }
            else {
                total += s1CharCount[prop];
            }
        }
    }
    return total;
}
console.log(findCommonChar(`aabcc`, `adcaa`));
//# sourceMappingURL=countCommonChar.js.map