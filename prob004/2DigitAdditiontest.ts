import twoDigitAddition from "./2DigitAddtion";

describe("Prob004 - 2 Digit Addition test", () => {
  // console.log(twoDigitAddition(26))
  it("test 1; 26 should return 8", () => {
    // input
    const input = twoDigitAddition(26);

    // assert
    expect(input).toBe(8);
  });
  it("test 2; 78 should return 15", () => {
    // input
    const input = twoDigitAddition(78);

    // assert
    expect(input).toBe(15);
  });
  it("test 3; 82 should return 10", () => {
    // input
    const input = twoDigitAddition(82);

    // assert
    expect(input).toBe(10);
  });
})
