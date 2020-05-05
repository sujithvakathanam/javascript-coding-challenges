/*
 *Perfect Square Patch
 *Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.
 *
 *Examples
 *squarePatch(3) ➞ [
 *  [3, 3, 3],
 *  [3, 3, 3],
 *  [3, 3, 3]
 *]
 *
 *squarePatch(5) ➞ [
 *  [5, 5, 5, 5, 5],
 *  [5, 5, 5, 5, 5],
 *  [5, 5, 5, 5, 5],
 *  [5, 5, 5, 5, 5],
 *  [5, 5, 5, 5, 5]
 *]
 *
 *squarePatch(1) ➞ [
 *  [1]
 *]
 *
 *squarePatch(0) ➞ []
 *Notes
 *n >= 0.
 *If n === 0, return an empty array.
 */

/*
 * Solution 1- Please note that array can be created by new Array() or Array() or Array.from();
 * Please check this URL for futher info
 * https://www.freecodecamp.org/news/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b/
 */

function squarePatch (n) {
  // Return new Array(n).fill(Array(n).fill(n));

  // Return Array(n).fill(Array(n).fill(n));
  return new Array(n).fill(new Array(n).fill(n));
}

console.log(squarePatch(3));
