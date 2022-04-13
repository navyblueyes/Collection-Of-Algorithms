import equallyStrong from "./equallyStrong";

describe("Testing Problem 011...", () => {

  // console.log(equallyStrong(10, 15, 15, 10)) // true
  it("Inserting '10, 15, 15, 10'... expecting 'true'", () => {
    const test1 = equallyStrong(10, 15, 15, 10);
    console.log(test1 == true);
    expect(test1).toBe(true);
  });


  // console.log(equallyStrong(15, 10, 15, 10)) // true
  it("Inserting '15, 10, 15, 10'... expecting 'true'", () => {
    const test2 = equallyStrong(15, 10, 15, 10);
    console.log(test2 == true);
    expect(test2).toBe(true);
  });


  // console.log(equallyStrong(15, 10, 15, 9))  // false
  it("Inserting '[15, 10, 15, 9]'... expecting 'false'", () => {
    const test3 = equallyStrong(15, 10, 15, 9);
    console.log(test3 == false);
    expect(test3).toBe(false);
  });
});
