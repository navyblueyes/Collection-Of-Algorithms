import { opposingRingNumber } from './opposingRingNumber';

describe('Testing Problem 028...', () => {

  it("Inserting 10 2; should return 7", () => {
    expect(opposingRingNumber(10, 2)).toEqual(7);
  });
});
