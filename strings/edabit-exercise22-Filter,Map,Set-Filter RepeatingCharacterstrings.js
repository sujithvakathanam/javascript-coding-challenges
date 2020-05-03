/*
 * Filter Repeating Character Strings
 * Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
 *
 * Examples
 * identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])
 * ➞ ["aaaaaa", "d", "eeee"]
 *
 * identicalFilter(["88", "999", "22", "545", "133"])
 * ➞ ["88", "999", "22"]
 *
 * identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])
 * ➞ []
 * Notes
 * A string with a single character is trivially counted as a string with repeating identical characters.
 * If there are no strings with repeating identical characters, return an empty array (see example #3).
 *
 */

// Solution 1*/ //Using map, Set method
function identicalFilter (arr) {
  const temp = [];
  arr.map(item => {
    Array.from(new Set(item.split(''))).length === 1 ? temp.push(item) : null;
  });

  return temp;
}

console.log(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']));

// Solution 2- Using filter*/ //**** Please never use curly brackets in filter --if you use curly bracket, please use return
function identicalFilter1 (arr) {
  return arr.filter(item => Array.from(new Set(item.split(''))).length === 1);
}

console.log(identicalFilter1(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']));
