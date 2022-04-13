// arrayElemReplace([1, 2, 1], 1, 3)) returns [3,2,3]
import arrayElemReplace from './arrayElemReplace';

describe('Problem 018 testing...', () => {
  it("Inserting [1, 2, 1], 1, 3), expecting [3,2,3]", () => {
    const test1 = arrayElemReplace([1, 2, 1], 1, 3)
    expect(test1).toEqual(expect.arrayContaining([3, 2, 3])
  })
});
