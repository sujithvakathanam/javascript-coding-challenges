// Trace That Matrix
// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).
//
// As an example, for:
//
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// ... the trace is 1 + 5 + 9 = 15.
//
// Write a function that takes a square matrix and computes its trace.
//
//   Examples
// Trace([
//   [1, 4],
//   [4, 1]
// ]) ➞ 2
//
// // 1 + 1 = 2
//
// Trace([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]) ➞ 15
//
// // 1 + 5 + 9 = 15
//
// Trace([
//   [1, 0, 1, 0],
//   [0, 2, 0, 2],
//   [3, 0, 3, 0],
//   [0, 4, 0, 4]
// ]) ➞ 10
//
// // 1 + 2 + 3 + 4 = 10
// Notes
// As in the examples, the size of the matrices will vary (but they will always be square).

// Solution 1
function trace (arr) {
  let sum = 0;
  // eslint-disable-next-line id-length
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }

  return sum;
}

const arr = [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];

console.log(trace(arr));

// Solution 2 using reduce function
function trace1 (arr1) {
  const sum1 = arr.reduce((acc, cv, index) => acc + cv[index], 0);

  return sum1;
}

const arr1 = [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];

console.log(trace1(arr1));
