import add from "./add";

describe(add.name, () => {
  it('test 1', () => {
    // set variables
    const result = add(1, 2);

    // assert
    expect(result).toBe(3);
  });

  it('test 2', () => {
    // set variables
    const result = add(3, 2);

    // assert
    expect(result).toBe(5);
  });
});
