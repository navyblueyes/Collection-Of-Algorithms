// centuryFromYear(1700) should return 17.... centuryFromYear(1905) should return 20
import { centuryFromYear } from './centuryFromYear';

describe('Testing Problem 023', () => {

  it('Inserting 1700; expecting 17', () => {
    expect(centuryFromYear(1700)).toEqual(17);
  }),
  it('Inserting 1905; expecting 20', () => {
    expect(centuryFromYear(1905)).toEqual(20);
  })
});
