
import { trainerScorekeeper } from './trainerScoreKeeper';

describe('Testing Problem 030...', () => {

  // trainerScorekeeper([[3, 1],[6, 1],[4, 1],[5, 1]]) --> 4.5
  it("Inserting [[3, 1],[6, 1],[4, 1],[5, 1]]; expecting 4.5", () => {
    expect(
      trainerScorekeeper([
        [3, 1],
        [6, 1],
        [4, 1],
        [5, 1],
      ])
    ).toEqual(4.5);
  });

  // trainerScorekeeper([[4, 1],[4, -1],[0, 0],[6, 1],]) --> 5.0
  it('Inserting ; expecting ', () => {
    expect(
      trainerScorekeeper([
        [4, 1],
        [4, -1],
        [0, 0],
        [6, 1]
      ])
    ).toEqual(5.0);
  });

  // trainerScorekeeper([[3, -1],[0, 0],[4, -1]]) --> 0.0
  it("Inserting [[3, -1],[0, 0],[4, -1]]; expecting 0.0", () => {
    expect(
      trainerScorekeeper([
        [3, -1],
        [0, 0],
        [4, -1],
      ])
    ).toEqual(0.0);
  });
});
