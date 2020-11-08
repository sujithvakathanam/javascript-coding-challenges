/*
 * https://edabit.com/challenge/nDQugFjducBmKXyFf
 * Two is the Difference
 * Create a function that takes an array of integers and returns all pairs of integers that have a difference of two. The resulting array should be sorted in ascending order of values.
 *
 *   Examples
 * differenceTwo([1, 2, 3, 4]) ➞ [[1, 3], [2, 4]]
 *
 * differenceTwo([1, 23, 3, 4, 7]) ➞ [[1, 3]]
 *
 * differenceTwo([4, 3, 1, 5, 6]) ➞ [[1, 3], [3, 5], [4, 6]]
 * Notes
 * Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.
 */

// Solution1 -using array.map
function differenceTwo (n) {
  const resultArr = [];
  n.sort((a, b) => a - b);

  // eslint-disable-next-line array-callback-return
  n.map((item, index, arr) => {
    for (let i = index + 1; i < arr.length; i++) {
      arr[i] - item === 2 ? resultArr.push([item, arr[i]]) : null;
    }
  });

  return resultArr;
}

console.log(differenceTwo([1, 2, 3, 4]));

// Solution2- using array.includes
function differenceTwo1 (n) {
  const resultArr = [];
  n.sort((a, b) => a - b);

  // eslint-disable-next-line array-callback-return
  n.map((item) => {
    n.includes(item + 2) ? resultArr.push([item, item+2]) : null;
  });

  return resultArr;
}

console.log(differenceTwo1([1, 2, 3, 4]));
