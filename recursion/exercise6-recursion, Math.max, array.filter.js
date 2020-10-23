/*
 * Find the Largest Even Number
 * Write a function that finds the largest number in an array nums that is also even. If there is no even number, return -1.
 *
 * Examples
 * largestEven([3, 7, 2, 1, 7, 9, 10, 13]) ➞ 10
 *
 * largestEven([1, 3, 5, 7]) ➞ -1
 *
 * largestEven([0, 19, 18973623]) ➞ 0
 * Notes
 * Consider using the modulo % operator.
 */

// Solution1 -Using recursive
function largestEven (nums) {
  nums.sort((a, b) => a - b);

  return recursive(nums);
}

function recursive (numbers) {
  // Termination
  if (Math.max(...numbers) % 2 === 0) {
    return Math.max(...numbers);
  }

  // Recursive
  if (numbers.length > 0 && Math.max(...numbers) % 2 !== 0) {
    return largestEven(numbers.slice(0, numbers.length - 1));
  }

  return -1;
}

console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13]));
console.log(largestEven([1, 3, 5, 7]));
console.log(largestEven([3, 19, 18973623, 2]));

/*
 * Solution 2 -Using array.filter and Math.max
 * here filter the array with only even nos, then find the max --Its simple logic
 */

function largestEven1 (nums) {
  return Math.max(...nums.filter(number => number % 2 === 0), -1);
}

console.log(largestEven1([3, 7, 2, 1, 7, 9, 10, 13]));
console.log(largestEven1([1, 3, 5, 7]));
console.log(largestEven1([3, 19, 18973623, 2]));
