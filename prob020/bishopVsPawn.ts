// given positon of white bishop (../img/prob020.jpg)
// determine whether bishop can capture pawn in one move

function bishopVsPawn(bishopPosition: string, pawnPosition: string): Boolean {
  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };

  const bishopX = board[bishopPosition[0]];
  const bishopY = parseInt(bishop[1]);
  const pawnX = board[pawnPosition[0]];
  const pawnY = parseInt(pawn[1]);

  if (
    bishopX + bishopY === pawnX + pawnY ||
    bishopX + pawnY === pawnX + bishopY
  ) {
    return true;
  }

  return false;
}
