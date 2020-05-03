/*
 * Find the Missing Number
 * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
 *
 * Examples
 * missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
 *
 * missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
 *
 * missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
 * Notes
 * The array of numbers will be unsorted (not in order).
 * Only one number will be missing.
 */

function missingNum (arr) {
  const obj = {};
  arr.forEach(item => {
    if (obj[item] === undefined) {
      obj[item] = true;
    }
  });// This operation is O(n);

  for (let i = 1; i <= 10; i++) {
    if (obj[i] === undefined) {
      return i;
    }
  } // This operation is O(n)- Solution is much more faster than having two for loops

  return undefined;
}

const arr = [10, 5, 1, 2, 4, 6, 8, 3, 9];
console.log(missingNum(arr));

function missingNum1 (arr) {
  for (let i = 1; i <= 10; i++) {
    if (!arr.includes(i, 0)) {
      return i;
    }
  }

  return undefined;
}

const arr1 = [10, 5, 1, 2, 4, 6, 8, 3, 9];
console.log(missingNum1(arr));
