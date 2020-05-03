/*
 *Same Parity?
 *Create a function that takes a number as input and returns true if the sum of its digits has the same parity as the entire number. Otherwise, return false.
 *
 *Examples
 *parityAnalysis(243) ➞ true
 *// 243 is odd and so is 9 (2 + 4 + 3)
 *
 *parityAnalysis(12) ➞ false
 *// 12 is even but 3 is odd (1 + 2)
 *
 *parityAnalysis(3) ➞ true
 *// 3 is odd and 3 is odd and 3 is odd (3)
 *Notes
 *Parity is whether a number is even or odd. If the sum of the digits is even and the number itself is even, return true. The same goes if the number is odd and so is the sum of its digits.
 *Single digits will obviously have the same parities (see example #3).


/*
 *Solution1 -Using array.reduce method
 *function parityAnalysis(num) {
 *
 *  let sum = ([].concat(...String(num)).reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue)));
 *  return sum%2 === num%2 ? true : false;
 *
 *}
 *console.log(parityAnalysis(312));
 *
 */

/* Solution 2 - Please note index is not used, but +currentValue converts it into Number and 0 is the initial value */
/*
 *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * 
 */
function parityAnalysis (num) {
  // return [...String(num)].reduce((accumulator,currentValue, index) => accumulator + +currentValue ,0) // 0 is the initial value, accumulator will be 0 initially, currentvalue will be first value of array
  // return [...String(num)].reduce((accumulator,currentValue, index) => Number(accumulator) + +currentValue) // initial value is not passed, accumulator is the first element of array, since it is a string, need to convert to a Number
  return [...String(num)].reduce((accumulator, currentValue, index) => Number(accumulator) + Number(currentValue));
}

console.log(parityAnalysis(312));
