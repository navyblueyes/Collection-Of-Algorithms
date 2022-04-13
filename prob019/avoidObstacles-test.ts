// avoidObstacles([5, 3, 6, 7, 9]) expecting 4

import avoidObstacles from "./avoidObstacles";

describe("Testing Problem 019...", () => {
  it("Inserting [5, 3, 6, 7, 9]; expecting 4", () => {
    const test1 = avoidObstacles([5, 3, 6, 7, 9]);
    expect(test1).toEqual(4);
  });
});
