/*
 * Number to Reversed Array
 *Create a function that takes a number and returns an array with the digits of the number in reverse order.
 *
 *Examples
 *reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]
 *
 *reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]
 *
 *reverseArr(12345) ➞ [5, 4, 3, 2, 1]
 *Notes
 *N/A
 *
 */

function reverseArr (num) {
  // eslint-disable-next-line no-unused-vars
  const reg = new RegExp('\'', 'gi');

  return String(num)
    .split('')
    .reverse()
    .map(x => Number(x));
}

const num = 12345;
console.log(reverseArr(num));
