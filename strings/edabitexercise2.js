/*
 *
 *Write a function that returns the longest sequence of consecutive zeroes in a binary string.
 *
 *Examples
 *longestZero("01100001011000") ➞ "0000"
 *
 *longestZero("100100100") ➞ "00"
 *
 *longestZero("11111") ➞ ""
 *Notes
 *If no zeroes exist in the input, return an empty string.
 */

/*
 * Solution1
 *
 * function longestZero(str) {
 *
 *  let check = str.split(',');
 *  console.log(check);
 *
 *  let splittedSr= str.split('1').sort().pop();
 * // console.log('splittedstr is', splittedSr);
 *  return splittedSr;
 * }
 *
 * console.log(longestZero("1000010010010000010100"));
 */

/* Solution 2*/
function longestZero (s) {
  return s.split('1').reduce((a, b) => (a.length > b.length ? a : b));
}

console.log(longestZero('1000010010010000010100'));
