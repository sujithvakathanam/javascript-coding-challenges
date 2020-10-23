/*
 * https://edabit.com/challenge/yXSTvCNen2DQHyrh6
 *  Length of a Nested Array
 *  The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
 *
 *    [1, [2, 3]]
 *  // 2 elements, number 1 and array [2, 3]
 *  Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
 *
 *  Write a function that returns the total number of non-nested items in a nested array.
 *
 *    Examples
 *  getLength([1, [2, 3]]) ➞ 3
 *
 *  getLength([1, [2, [3, 4]]]) ➞ 4
 *
 *  getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
 *
 *  getLength([1, [2], 1, [2], 1]) ➞ 5
 *  Notes
 *  An empty array should return 0.
 */

// Using Solution1: Iterative approach
const result = [];

const getLength = arr => {
  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line no-negated-condition
    if (!Array.isArray(arr[i])) {
      result.push(arr[i]);
    } else {
      getLength(arr[i]);
    }
  }

  return result.length;
};
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));

//  Solution2: Using arr.flat(infinity)
const getLength1 = arr => arr.flat(Infinity).length;
console.log(getLength1([1, [2, [3, [4, [5, 6]]]]]));

// Solution3: using recursion and array.reduce method...Important to have return statement as {} is used
function getLength3 (arr) {
  return arr.reduce(
    (acc, cv) => (Array.isArray(cv) ? acc + getLength3(cv) : acc + 1) // Important to have return statement as {} is used
    , 0
  );
}

console.log(getLength3([1, [2, [3, [4, [5, 6]]]]]));

// Solution 4: Using Array.concat method
function getLength4 (arr) {
  return flatten(arr).length;
}

function flatten (arr) {
  return arr.reduce((acc, cv) => (Array.isArray(cv) ? acc.concat(flatten(cv)) : acc.concat(cv)), []); // Initial acc value is []
}

console.log(getLength4([1, [2, [3, [4, [5, 6]]]]]));
