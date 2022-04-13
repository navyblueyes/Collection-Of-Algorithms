// console.log(alphaShift("crazy")); //dsbzz

import alphaShift from "./alphaShift";

describe("Testing Problem 008...", () => {
  it("Inserting 'crazy' and expecting 'dsbzz'", () => {
    const test1 = alphaShift("crazy");

    expect(test1).toBe("dsbzz");
  });
})
