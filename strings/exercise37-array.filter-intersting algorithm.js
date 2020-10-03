/*
 * Equality of 3 Values
 * Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.
 *
 *     Examples
 * equal(3, 4, 3) ➞ 2
 *
 * equal(1, 1, 1) ➞ 3
 *
 * equal(3, 4, 1) ➞ 0
 * Notes
 * Your function must return 0, 2 or 3.
 */

function equal (a, b, c) {
  const uniqueArr = Array.from(new Set([a, b, c]));
  const arr = [a, b, c];

  let result = 0;

  // eslint-disable-next-line id-length
  for (let i = 0; i < uniqueArr.length; i++) {
    arr.filter(item => item === uniqueArr[i]).length > 1 ? result : result += 1;
  }

  return arr.length - result;
}
console.log(equal(3, 4, 3));
