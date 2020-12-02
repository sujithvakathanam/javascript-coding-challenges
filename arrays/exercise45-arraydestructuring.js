/*
 * Are the Sum of Digits in the Numbers Equal?
 *     Write function that takes an array with two numbers in it and determines if the sum of the digits of the two numbers are equal to each other.
 *
 *     Examples
 * isEqual([105, 42]) ➞ true
 * # 1 + 0 + 5 = 6
 * # 4 + 2 = 6
 *
 * isEqual([21, 35]) ➞ false
 *
 * isEqual([0, 0]) ➞ true
 * Notes
 * N/A
 */

// Using Solution 1 - Please note, that in reducer function, acc initial value should be 0, other wise it will not work

function isEqual (arr) {
  return arr[0].toString().split('').reduce((acc, cv) => (+acc + +cv), 0 ) ===
      arr[1].toString().split('').reduce((acc, cv) => (+acc + +cv) , 0 )
}

console.log(isEqual([01, 10]));


// Using Solution 2 - Using array destructuring- please note ...x -spread operator will split 01 and will create ['0','1']
function isEqual1 ([x,y]) {
  [x,y] = [[...x+''].reduce((acc, cv)=> acc + +cv, 0),
           [...y+''].reduce((acc, cv)=> acc + +cv, 0)];
  return x===y;
}

console.log(isEqual1([01, 10]));
