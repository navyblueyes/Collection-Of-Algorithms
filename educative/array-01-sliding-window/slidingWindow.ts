// Given an integer array and a window of size `w`, find the current maximum value in the window as it slides through the entire array.

// sample input
//    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    window_size = 3

// expected output
//
//    [3, 4, 5, 6, 7, 8, 9, 10]

function findMaxSlidingWindow(nums: Array<number>, windowSize: number) {
  var result: Array<number> = [];
  var slidingWindow: Array<number> = [nums[0]];


  // filling up the slidingWindow
  for (let i: number = 1; i < windowSize; i++) {
    while (nums[i] >= nums[slidingWindow[slidingWindow.length - 1]]) {
      slidingWindow.pop()
    }
    slidingWindow.push()
  }

  // push the initial result onto results
  result.push(nums[slidingWindow[0]])


  // nums has been ran up to the size of the slidingWindow
  //
  for (let i: number = 1; i < nums.length-(windowSize-1); i++) {

  }

  return result;
};
