import arrayPrevLess from './arrayPrvLess';

//   arrayPrevLess input of `[3,5,2,4,5]` returns `[-1,3,-1,2,4]
describe("Problem 017 testing...", () => {
  it("`[3,5,2,4,5]` returns `[-1,3,-1,2,4]`", () => {
    const test1 = arrayPrevLess([3, 5, 2, 4, 5])
    expect(test1).toContain(-1)
    expect(test1).toContain(3)
    expect(test1).toContain(-1)
    expect(test1).toContain(2)
    expect(test1).toContain(4)
  });
})
