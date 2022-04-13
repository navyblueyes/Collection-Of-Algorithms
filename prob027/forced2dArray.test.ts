import { forced2dArray } from './forced2dArray';

describe('', () => {

  // inserting [a,b,c,d], 2  --> [[a.b],[c,d]]
  it('should do something', () => {
    expect(forced2dArray(["a", "b", "c", "d"], 2)).toEqual(
      expect.arrayContaining([["a","b"], ["c","d"]])
    )
  });

  // inserting [0,1,2,3,4,5] , 4  --> [[0,1,2,3],[4,5]]
  it('should do something', () => {
    expect(forced2dArray([0, 1, 2, 3, 4, 5], 4)).toEqual(
      expect.arrayContaining([
        [0, 1, 2, 3],
        [4, 5],
      ])
    )
  });
});
