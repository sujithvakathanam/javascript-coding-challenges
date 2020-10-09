// Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.
//
//     Examples
// SumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
//
// SumOfCubes([3, 4, 5]) ➞ 216
//
// SumOfCubes([2]) ➞ 8
//
// SumOfCubes([]) ➞ 0
// Notes
// If given an empty array, return 0.

function sumOfCubes (nums) {
  return nums.reduce((acc, cv) => acc + Math.pow(cv, 3), 0);
}
console.log(sumOfCubes([3, 4, 5]));
