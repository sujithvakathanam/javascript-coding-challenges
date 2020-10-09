/*
 * https://edabit.com/challenge/WYNfvyd5NRfAgtcqZ
 * Return Duplicate Numbers
 * Given an array nums where each integer is between 1 and 100, return another array containing only duplicate numbers from the given nums array.
 *
 *   Examples
 * duplicateNums([1, 2, 3, 4, 3, 5, 6]) ➞ [3]
 *
 * duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]) ➞ [72, 81, 99]
 *
 * duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ null
 * Notes
 * The given array won't contain the same number three times.
 */

function duplicateNums (nums) {
  const duplicateArr = nums.filter(item => nums.indexOf(item) !== nums.lastIndexOf(item));

  return Array.from(new Set(duplicateArr)).length === 0 ? null : Array.from(new Set(duplicateArr)).sort((a, b) => a - b);
}

console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54]));
