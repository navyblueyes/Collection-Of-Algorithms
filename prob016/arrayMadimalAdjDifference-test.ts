// [2, 4, 1, 0] should return 3

import arrayMaximalAdjDifference from "./arrayMadimalAdjDifference";
describe("Testing Problem 014...", () => {
  it("Inserting '[2, 4, 1, 0]'... expecting '3'", () => {
    const test1 = arrayMaximalAdjDifference([2, 4, 1, 0]);
    console.log(test1);
    expect(test1).toBe(3);
  });
});
