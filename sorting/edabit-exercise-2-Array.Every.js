/*
 * Consecutive Numbers
 *  Create a function that determines whether elements in an array can be re-arranged to form a consecutive list of numbers where each number appears exactly once.
 *
 *      Examples
 *  Cons([5, 1, 4, 3, 2]) ➞ true
 *  // Can be re-arranged to form [1, 2, 3, 4, 5]
 *
 *  Cons([5, 1, 4, 3, 2, 8]) ➞ false
 *
 *  Cons([5, 6, 7, 8, 9, 9]) ➞ false
 *  // 9 appears twice
 *  Notes
 *  N/A
 */

// Solution1
function cons (arr) {
  if (new Set(arr).size !== arr.length) {
    return false;
  }
  const sortedArr = arr.sort((a, b) => a > b);

  return sortedArr.every((item, index, arr) => {
    if (index !== arr.length - 1 && item + 1 !== arr[index + 1]) {
      return false;
    }

    return true;
  });
}

console.log(cons([5, 1, 4, 3, 2])); // True
console.log(cons([55, 59, 58, 56, 57]));// , true)
console.log(cons([-3, -2, -1, 1, 0]));// , true)
console.log(cons([5, 1, 4, 3, 2, 8]));// , false)
console.log(cons([5, 6, 7, 8, 9, 9]));// , false)
console.log(cons([5, 3]));// , false)
