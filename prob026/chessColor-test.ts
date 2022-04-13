import { checkBoardPosition } from './chessColor';

describe('Testing Problem 026... ', () => {

  // checkBoardPosition("a1", "c3")) should return true
  it('Inserting "a1", "c3"; expecting true', () => {
    expect(checkBoardPosition("a1", "c3")).toEqual(true);
  });

  // checkBoardPosition("a1", "b1")) should return false
  it('Inserting "a1", "b1"; expecting false', () => {
    expect(checkBoardPosition("a1", "b1")).toEqual(false);
  });
});
