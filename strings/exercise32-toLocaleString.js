/*
 *Format Number with Comma(s) Separating Thousands
 *Create a function that takes a number as an argument and returns a string formatted to separate thousands.
 *
 *Examples
 *formatNum(1000) ➞ "1,000"
 *
 *formatNum(100000) ➞ "100,000"
 *
 *formatNum(20) ➞ "20"
 *Notes
 *You can expect a valid number for all test cases.
 */

function formatNum (num) {
  return num.toLocaleString();
}

console.log(formatNum(1000));
