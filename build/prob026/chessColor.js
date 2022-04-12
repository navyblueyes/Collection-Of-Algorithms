// input string
// goal -- take in two chessboard position and return a boolean if color of board position match
// chessboard --> ../img/prob027.jpg
// example --> c3 a1 should return true
//         --> a1 b1 should return false
function checkBoardPosition(firstInput, secondInput) {
    let alphaPosition = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
    };
    let board1 = alphaPosition[firstInput[0]] + parseInt(firstInput[1]);
    let board2 = alphaPosition[secondInput[0]] + parseInt(secondInput[1]);
    // check if both are even or odd
    return board1 % 2 === board2 % 2;
}
console.log(checkBoardPosition("a1", "c3"));
console.log(checkBoardPosition("a1", "b1"));
//# sourceMappingURL=chessColor.js.map