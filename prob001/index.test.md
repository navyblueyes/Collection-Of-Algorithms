import { arrayMinimization } from "./index";

describe(arrayMinimization.name, () => {
  it("test 1", () => {
    // run test
    const test1 = arrayMinimization([4, 7, 8, 9]);

    // assert
    expect(test1).toBe(7);
  });


  //    [1, 2, 4, 6, 7] -- 4
  it("test 2", () => {
    // run test
    const test1 = arrayMinimization([1, 2, 4, 6, 7]);

    // assert
    expect(test1).toBe(4);
  });


  //    [5,  6,  7,  8] -- 6
  it("test 3", () => {
    // run test
    const test1 = arrayMinimization([5, 6, 7, 8]);

    // assert
    expect(test1).toBe(6);
  });

});
