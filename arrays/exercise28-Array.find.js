// /*
// Get the Diagonals
// Given a square array (n*n size) implement a function that returns a new array containing two arrays equal to the two diagonals, in the following order:
//
// Diagonal 1 = from upper-left to lower-right corner
// Diagonal 2 = from upper-right to lower-left corner
// Examples
// GetDiagonals([ [1, 2], [3, 4] ]) ➞ [ [1, 4], [2, 3] ]
//
// GetDiagonals([ ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"] ]) ➞ [ ["a", "e", "i"], ["c", "e", "g"] ]
//
// GetDiagonals([ [true] ]) ➞ [ [true], [true] ]
// Notes
// Your function must also work with single elements or empty arrays.
// Try to build both diagonals with a single loop.
//  */

function getDiagonals (arr) {
  const arr1 = [];
  const arr2 = [];

  const n = arr.length;
  for (let i = 0; i < n; i++) {
    arr1.push(arr[i].find((item, index) => index === i));
    arr2.push(arr[i].find((item, index) => index === n - 1 - i));
  }

  return [arr1, arr2];
}

console.log(getDiagonals([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]));
