import stringSeqCheck from "./stringSeqCheck";

describe("Testing Problem 009...", () => {
  it("Inserting 'asdf'... expecting 'false'", () => {
    const test1 = stringSeqCheck("asdf");
    expect(test1).toBe(false)
  });
  it("Inserting 'adfs'... expecting 'true'", () => {
    const test2 = stringSeqCheck("adfs");
    expect(test2).toBe(true);
  });
  it("Inserting 'adfffs'... expecting 'false'", () => {
    const test3 = stringSeqCheck("adfffs");
    expect(test3).toBe(false);
  });
});
