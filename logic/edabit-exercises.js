/*
 *
 * Create a function that returns the mean of all digits.
 *
 *     Examples
 * mean(42) ➞ 3
 *
 * mean(12345) ➞ 3
 *
 * mean(666) ➞ 6
 * Notes
 * The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
 * The mean will always be a integer.
 */

// Solution 1:
function mean (num) {
  const strNum = num.toString();
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += parseInt(strNum.charAt(i));
  }

  return Math.floor(Math.abs(sum / strNum.length));
}

console.log(mean(421));

// Solution 2 - Use array.prototype.reduce and array.protye.map
function mean1 (num) {
  const arr = num.toString().split(''); // This splits the number to an array
  console.log('array is', arr);
  const nums = arr.map(item => Number(item));
  console.log('nums is', nums);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const total = nums.reduce(reducer);
  console.log('total is', total);

  return Math.floor(Math.abs(total / arr.length));
}
console.log(mean1(421));
