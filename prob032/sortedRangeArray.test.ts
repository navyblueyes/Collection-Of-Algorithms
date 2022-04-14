// sortedRangeArray([-1, 0, 1, 2, 6, 7, 9]) should return ["-1=>1","6=>7","9"]
import { sortedRangeArray } from './sortedRangeArray';

describe('Testing Problem 032...', () => {

  it('[-1, 0, 1, 2, 6, 7, 9] should return ["-1=>1","6=>7","9"]', () => {
    expect(sortedRangeArray([-1, 0, 1, 2, 6, 7, 9])).toEqual(
      expect.arrayContaining(["-1=>2", "6=>7", "9"])
    );
  });
});
