// *Fix the Error: Flattening an Array
// *I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].
// *
// *Here is my code:
// *
// *Function flatten(arr) {
// *  Arr2 = [];
// *  For (let i = 0; i < arr.length; i++) {
// *    Arr2.concat(arr[i]);
// *  }
// *  Return arr2;
// *}
// *But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.
// *
// *Examples
// *Flatten([[1, 2], [3, 4]]) ➞ []
// *// Expected: [1, 2, 3, 4]
// *
// *Flatten([["a", "b"], ["c", "d"]]) ➞ []
// *// Expected: ["a", "b", "c", "d"]
// *
// *Flatten([[true, false], [false, false]]) ➞ []
// *// Expected: [true, false, false, false]
// *Notes
// *N/A

// /*
//  *Solution 1
//  *
//  *// Fix this incorrect code so that all tests pass!
//  *Function flatten(arr) {
//  *  Arr2 = [];
//  *  For (let i = 0; i < arr.length; i++) {
//  *      Console.log(arr[i]);
//  *      Arr[i].map((currentValue) => arr2.push(currentValue));
//  *  }
//  *  Return arr2;
//  *}
//  *
//  *//console.log(flatten([["a", "b"], ["c", "d"]]))
//  *//console.log(flatten([[true, false], [false, false]]))
//  *
//  */

/* Solution 2 - concat method combines two arrays and returns a single array*/
function flatten (arr) {
  return arr.reduce((accumulator, currentValue) => accumulator.concat(currentValue));
}

console.log(flatten([['a', 'b'], ['c', 'd']]));
console.log(flatten([[true, false], [false, false]]));
