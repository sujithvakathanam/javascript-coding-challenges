/*
 * Sort and merge two arrays
 * Given there are two arrays of different length, return an array such that it is sorted and merged removing the duplicates
 *
 *
 */

function sorrAndMerge (arr1, arr2) {
  const newArr = arr1.concat(arr2).sort((a, b) => a - b);
  console.log(newArr);

  return Array.from(new Set(newArr)); // Returns unique values
}

const arr1 = [44, 6, 8, 4, 34, 2];
const arr2 = [3, 4];
console.log(sorrAndMerge(arr1, arr2));
