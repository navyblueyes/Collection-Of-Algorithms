// given -> string
// return --> `odd` `even` `not a digit`
function oddOrEven(input) {
    const result = parseInt(input);
    isNaN(input) ? "not a digit" : result % 2 === 0 ? "even" : "odd";
}
console.log(oddOrEven("5"));
console.log(oddOrEven("8"));
console.log(oddOrEven("q"));
//# sourceMappingURL=oddOrEven.js.map