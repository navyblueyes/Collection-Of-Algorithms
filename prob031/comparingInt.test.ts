
import { comparingInt } from './comparingInt';

describe('Testing Problem 031...', () => {

  // comparingInt("12", "13")) less
  it('Inserting ("12", "13") ; expect "less"', () => {
    expect(comparingInt("12", "13")).toEqual("less");
  });

  // comparingInt("875", "799")) greater
  it('Inserting ("875", "799"); expect "greater"', () => {
    expect(comparingInt("875", "799")).toEqual("greater");
  });

  // comparingInt("1000", "1000"))  equal
  it('Inserting ("1000", "1000"); expect "equal"', () => {
    expect(comparingInt("1000", "1000")).toEqual("equal");
  });
});
