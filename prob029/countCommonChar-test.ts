import { findCommonChar } from './countCommonChar';

describe('Testing Problem 029...', () => {

  it("Inserting `aabcc`, `adcaa`; expecting 3", () => {
    expect(findCommonChar(`aabcc`, `adcaa`)).toEqual(3);
  });
});
