import asteriskPictureFrame from './picture-frame';

describe(asteriskPictureFrame.name, () => {
  it('Test 1', () => {
    // generate input
    const data = ["abc", "ded"];

    // implement picture frame function
    const response = asteriskPictureFrame(data);

    // assert
    expect(response).toEqual([
      "*****",
      "*abc*",
      "*ded*",
      "*****"
    ]);
  });
});
