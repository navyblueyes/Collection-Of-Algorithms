// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

import arrayMaxConsecutiveSum from "./arrayMaxSum";
describe("Testing Problem 014...", () => {
  it("Inserting '[2, 3, 5, 1, 6]'... expecting '[8]'", () => {
    const test1 = arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2);
    console.log(test1);
    expect(test1).toBe(8);
  });
});
