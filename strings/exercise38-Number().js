/*
 * Multiplying Numbers in a String
 * Given a string of numbers separated by a comma and space, return the product of the numbers.
 *
 *   Examples
 * multiplyNums("2, 3") ➞ 6
 *
 * multiplyNums("1, 2, 3, 4") ➞ 24
 *
 * multiplyNums("54, 75, 453, 0") ➞ 0
 *
 * multiplyNums("10, -2") ➞ -20
 * Notes
 * Bonus: Try to complete this challenge in one line!
 */

// Solution 1
function multiplyNums (nums) {
  const newArr = nums.split(',');

  return newArr.length === 1 ? Number(newArr[0]) : newArr.reduce((acc, cv) => Number(acc) * Number(cv));
}

console.log(multiplyNums('19'));

// Solution 2 --Using + operator
function multiplyNums1 (nums) {
  return nums.split(', ').reduce((acc, cv) => acc * Number(cv), 1);
}
console.log(multiplyNums1('19'));
