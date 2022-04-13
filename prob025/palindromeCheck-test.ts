import { palindromeCheck } from './palindromeCheck';

describe('Testing Problem 025...', () => {

  // palindromeCheck("aabaa") should return 'true'
  it('Inserting "aabaa"; expecting "true"', () => {
    expect(palindromeCheck("aabaa")).toEqual(true);
  });

  // palindromeCheck("aabac") should return 'true'
  it('Inserting "aabac"; expecting "true"', () => {
    expect(palindromeCheck("aabac")).toEqual(false);
  });

  // palindromeCheck("a") should return 'true'
  it('Inserting "a"; expecting "true"', () => {
    expect(palindromeCheck("a")).toEqual(true);
  });
});
