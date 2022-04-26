// Given an integer array and a window of size `w`, find the current maximum value in the window as it slides through the entire array.

// sample input
//    nums = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//    window_size = 3

// expected output
//
//    [3, 4, 5, 6, 7, 8, 9, 10]

function findMaxSlidingWindow(nums: Array<number>, windowSize: number) {
  var result: Array<number> = [];
  var slidingWindow: Array<number> = [];

  // filling up the slidingWindow
  for (let i: number = 0; i < windowSize; i++) {
    while (slidingWindow.length >0 && nums[i] >= nums[slidingWindow[slidingWindow.length - 1]]) {
      slidingWindow.pop()
    }
    slidingWindow.push(i)
  }

  // push the initial result onto results
  result.push([slidingWindow[0]])




  // nums has been ran up to the size of the slidingWindow

  // first `pop` number from slidingWindow if it is smaller
  // second `shift` out the front of the slidingWindow to progress the slidingWindow
  // third `push` the latest number onto the slidingWindow to progress the slidingWindow
  // fourth `push` the number remaining in the slidingWindow onto the results

  for (let i: number = windowSize; i < nums.length; i++) {
    // 1. `while` loop it to reduce slidingWindow to the greatest number
    while (slidingWindow.length > 0 && nums[i] >= nums[slidingWindow[slidingWindow.length -1]]) {
      slidingWindow.pop()
    }

    // 2. `.shift` the first number out if sliding window is NOT at the end of nums
    if (slidingWindow.length > 0 && (slidingWindow[0] <= i - windowSize)) {
      slidingWindow.shift();
    }

    // 3. `push` new number
    slidingWindow.push(i);

    // push new result
    result.push(slidingWindow[0])
  }

  return result;
};


let targetList = [3, 2, 1, 2];
let numsList = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],
  [4, 5, 6, 1, 2, 3],
  [9, 5, 3, 1, 6, 3],
];

for (let i = 0; i < numsList.length; i++) {
  console.log(i + 1 + ". Original list:\t" + numsList[i]);
  console.log("   Window size:\t\t" + targetList[i]);
  console.log("   Max:\t\t\t" + findMaxSlidingWindow(numsList[i], targetList[i]));
  console.log("-----------------------------------------------------------------------------------------------------\n");
}
