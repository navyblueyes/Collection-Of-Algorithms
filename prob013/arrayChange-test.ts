// console.log(arrayChange([1, 1, 1])); // should return 3.... 1 for middle element, 2 for end element

import arrayChange from "./arrayChange";
describe("Testing Problem 013...", () => {

  it("Inserting '[1, 1, 1]'... expecting '3'", () => {
    const test1 = arrayChange([1, 1, 1]);
    console.log(test1);
    expect(test1).toBe(3);
  });
});
