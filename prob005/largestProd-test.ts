import largestProduct from "./largestProd"

describe("Problem 005 - Finding Largest Product of two elements of an array", () => {
  it("test 1 - take in [2, 5, 7, 8, 12, 23]; return 276", () => {
    // insert array
    const test1 = largestProduct([2, 5, 7, 8, 12, 23]);

    // assert for 276
    expect(test1).toBe(276);
  });

  it("test 2 - take in [2, 15, 17, 8, 2, 3]; return 255", () => {
    // insert array
    const test2 = largestProduct([2, 15, 17, 8, 2, 3]);

    // assert for 276
    expect(test2).toBe(255);
  });

  it("test 3 - take in [12, 5, 7, 8, 2, 13]; return 156", () => {
    // insert array
    const test3 = largestProduct([12, 5, 7, 8, 2, 13]);

    // assert for 276
    expect(test3).toBe(60);
  });
})
