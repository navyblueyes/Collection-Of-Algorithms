import areSimilar from "./areSimilar";
describe("Testing Problem 012...", () => {

  it("Inserting '[1, 2, 3], [1, 2, 3]'... expecting 'true'", () => {
    const test1 = areSimilar([1, 2, 3], [1, 2, 3]);
    console.log(test1);
    expect(test1).toBe(true);
  });

  it("Inserting '[1, 2, 3], [2, 1, 3]'... expecting 'true'", () => {
    const test2 = areSimilar([1, 2, 3], [2, 1, 3]);
    console.log(test2);
    expect(test2).toBe(true);
  });


  it("Inserting [1, 2, 2], [2, 2, 1]... expecting 'false'", () => {
    const test3 = areSimilar([1, 2, 2], [2, 1, 1]);
    console.log(`Test 3 returns ${test3}`);
    expect(test3).toBe(false);
  });

});
