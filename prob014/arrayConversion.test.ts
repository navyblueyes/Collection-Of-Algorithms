//   [1,2,3,4,5,6,7,8]
//    --> third iteration returns  [186]

import arrayConversion from "./arrayConversion";
describe("Testing Problem 014...", () => {
  it("Inserting '[1,2,3,4,5,6,7,8]'... expecting '[186]'", () => {
    const test1 = arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]);
    console.log(test1);
    expect(test1).toContain(186);
  });
});
