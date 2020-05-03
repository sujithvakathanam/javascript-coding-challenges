/*/!*
 *Accumulating Array
 *Create a function that takes in an array and returns an array of the accumulating sum.
 *
 *Examples
 *accumulatingArray([1, 2, 3, 4]) ➞ [1, 3, 6, 10]
 *!// [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]
 *
 *accumulatingArray([1, 5, 7]) ➞ [1, 6, 13]
 *
 *accumulatingArray([1, 0, 1, 0, 1]) ➞ [1, 1, 2, 2, 3]
 *
 *accumulatingArray([]) ➞ []
 *Notes
 *An empty array input should return an empty array [].
*!/*/

function accumulatingArray (arr) {
  const newArr = [];
  arr.map((item, index, arr1) => {
    if (index === 0) {
      newArr.push(item);
    } else {
      newArr.push(arr1[index] + newArr[index - 1]);
    }
  });

    return newArr;
}

console.log(accumulatingArray([1, 0, 1, 0, 1]));

 //Solution 2
const accumulatingArray1 = arr => {
  let sum = 0;
  return arr.map(num => (sum += num));
};
console.log(accumulatingArray([1, 0, 1, 0, 1]));
