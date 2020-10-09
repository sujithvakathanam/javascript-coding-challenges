// Sum of the Items in an Array
// Create a function that takes an array and returns the sum of all items in the array.
//
//   Examples
// SumArray([1, 2, 3]) ➞ 6
// // 1 + 2 + 3 = 6
//
// SumArray([1, [2, [1]], 3]) ➞ 7
// // 1 + 2 + 1 + 3 = 7
// Notes
// The item in an array can be another array.

function sumArray (arr) {
  return arr.flat(Infinity).reduce((pv, cv, index) => pv + cv);
}

console.log(sumArray([1, [2, [1]], 3]));

// Solution2 -using recursion
const sumArray1 = arr => arr.reduce((a, v) => a + (typeof v === 'object' ? sumArray1(v) : v), 0);

console.log(sumArray1([1, [2, [1]], 3]));
