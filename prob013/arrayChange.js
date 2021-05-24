// Goal to change array to ensure sequential order within array
//   each change causes element to increase by one
//
function arrayChange(inputArray) {
    var goalArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        if (i = 0) {
            goalArray.push(inputArray[i]);
        }
        else {
            goalArray.push(inputArray[0] + i);
        }
    }
    return goalArray;
}
console.log(arrayChange([1, 1, 1])); // should return 3.... 1 for middle element, 2 for end element
