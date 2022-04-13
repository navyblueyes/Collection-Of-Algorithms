import allLongestStrings from "./allLongestStrings";

describe("Problem 006 testing...", () => {
  it("test1", () => {
    //insert four strings
    const test1 = allLongestStrings(["asdf", "asd", "dsa", "weq"]);

    //expect two outputs
    console.log(test1);
    expect(test1).toBe(["asdf"]);
  });
})
