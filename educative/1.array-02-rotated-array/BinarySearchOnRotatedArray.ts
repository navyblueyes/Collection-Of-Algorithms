// Find Target of Rotated Array

// Problem
//   given
//     a sorted integer array  `nums`
//     an integer value `target`

// Implementation
//   array is rotated by some arbitrary number
//   Search the target in this array
//   If the target does not exist then return -1.

// Assumptions
//   array `nums` is ALREADY rotated

// sample input ==> nums = [6,7,1,2,3,4,5];  target = 3
// sample output ==> 4

let search = function (nums: Array<number>, start: number, end: number, target: number): number {
  if (start > end) {
    return -1;
  }

  // find the middle; using floor division
  let mid = start + Math.floor((end - start) / 2)
  if (nums[mid] === target) {
    return mid;
  }

  // sort start -> mid
  if (nums[start] <= nums[mid] && target <= nums[mid] && target >= nums[start]) {
    return search(nums, start, mid - 1, target);
  }

  // sort mid ---> end
  if (nums[mid] <= nums[end] && target >= nums[mid] && target <= nums[end]) {
    return search(nums, mid + 1, end, target);
  }

  if (nums[end] <= nums[mid]) {
    return search(nums, mid+1, end, target);
  }

  if (nums[end] >= nums[mid]) {
    return search(nums, start, mid-1, target);
  }

  return -1;
}

let binarySearchRotated = function (nums: Array<number>, target: number): number {

  return search(nums, 0, nums.length -1, target)
};

let targetL = [3, 6, 3, 6];
let numsL = [
  [6, 7, 1, 2, 3, 4, 5],
  [6, 7, 1, 2, 3, 4, 5],
  [4, 5, 6, 1, 2, 3],
  [4, 5, 6, 1, 2, 3],
];

for (let i = 0; i < targetL.length; i++) {
  console.log(i + 1 + ". Rotated array: " + numsL[i]);
  console.log(
    "   target " +
      targetL[i] +
      " found at index " +
      binarySearchRotated(numsL[i], targetL[i])
  );
  console.log(
    "----------------------------------------------------------------------------------------------------\n"
  );
}
