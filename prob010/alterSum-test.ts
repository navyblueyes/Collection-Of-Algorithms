// console.log(alterSum([54, 45, 84, 74, 78, 84])); //[216, 203]

import alterSum from "./alterSum";

describe("Testing Problem 010...", () => {
  it("Inserting '[54, 45, 84, 74, 78, 84]'... expecting '[216, 203]'", () => {
    const test1 = alterSum([54, 45, 84, 74, 78, 84])
    console.log(test1 == [216, 203]);
    expect(test1).toEqual(expect.arrayContaining([216,203]));
  });
});
