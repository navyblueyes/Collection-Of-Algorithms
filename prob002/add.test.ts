import add from "./add";

describe('add three test', () => {
  it('test 1', () => {
    // set variables
    const result = add([4, 7, 8]);

    // assert
    expect(result).toBe(19);
  });

  it('test 2', () => {
    // set variables
    const result = add([1, 6, 7]);

    // assert
    expect(result).toBe(14);
  });

  it('test 3', () => {
    // set variables
    const result = add([5, 6, 7, 8]);

    // assert
    expect(result).toBe(26);
  });
});
