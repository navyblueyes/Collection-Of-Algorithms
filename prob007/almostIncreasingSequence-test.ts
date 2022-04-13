import almostIncreasingSequence from './almostIncreasingSequence';

describe("Problem 007 testing...", () => {
  it("Inserting [1, 3, 2] and expecting `false`", () => {
    // inserting values into function
    const test1 = almostIncreasingSequence([1, 3, 2]);
    // expect a false return
    expect(test1).toBe(false);
  });
  it("Inserting [1, 3, 2, 1] and expecting `false`", () => {
    // inserting values into function
    const test1 = almostIncreasingSequence([1, 3, 2,1]);
    // expect a false return
    expect(test1).toBe(false);
  });
})
