/*
 *Number of Arrays in an Array
 *Return the total number of arrays inside a given array.
 *
 *Examples
 *numOfSubbarrays([[1, 2, 3]]) ➞ 1
 *
 *numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3
 *
 *numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4
 *
 *numOfSubbarrays([1, 2, 3]) ➞ 0
 *Notes
 *N/A
 */

/*
 * Solution 1- Please note arr.reduce( reducer, 0) -Her acc will pick up the first value as 0
 * function numOfSubbarrays(arr) {
 * return arr.reduce( (acc, currentValue)=>
 *    Array.isArray(currentValue) ? acc + 1 : acc
 * ,0)
 * };
 *
 * let arr = [[4,5],[7,8]]
 * //console.log(numOfSubbarrays(arr));
 * //console.log( numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]));
 * console.log( numOfSubbarrays([1, 2, 3]) );
 *
 */

/* Solution 2 */
function numOfSubbarrays (arr) {
  return arr.filter(Array.isArray).length;
}

const arr = [[4, 5], [7, 8]];
console.log(numOfSubbarrays(arr));
