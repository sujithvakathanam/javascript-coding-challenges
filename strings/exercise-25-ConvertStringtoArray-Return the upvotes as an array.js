/*
 *Transform Upvotes
 *Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.
 *
 *Examples
 *transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]
 *
 *transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]
 *
 *transformUpvotes("20.3k 3.8k 7.7k 992") ➞ [20300, 3800, 7700, 992]
 *Notes
 *Return the upvotes as an array.
 */

/* Solution 1*/
/*
 * Please check this page on how to convert a Number to a String-
 *  https://flaviocopes.com/how-to-convert-string-to-number-javascript/
 */

// To convert string to number, Used unary operator + instead of Number, or parseInt() or parseFloat() or *1
function transformUpvotes (str) {
  const newArr = [];
  str.split(' ').map(item => (item.endsWith('k') ? newArr.push(Number(item.slice(0, item.length - 1)) * 1000) : newArr.push(item)));

  return newArr;
}

console.log(transformUpvotes('6.8k 13.5k'));

// Solution 2 without using a new array or reducing the space complexity
function transformUpvotes1 (str) {
  return str.split(' ').map(item => (item.endsWith('k') ? Number(item.slice(0, item.length - 1)) * 1000 : Number(item)));
}

console.log(transformUpvotes1('6.8k 13.5k'));
