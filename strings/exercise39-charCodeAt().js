/*
 * Find the Characters Counterpart Char Code
 * Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.
 *
 *   Examples
 * Given that:
 *   - "A" char code is: 65
 * - "a" char code is: 97
 *
 * counterpartCharCode("A") ➞ 97
 *
 * counterpartCharCode("a") ➞ 65
 * Notes
 * The argument will always be a single character.
 *   Not all inputs will have a counterpart (e.g. numbers), in which case return the inputs char code.
 */

function counterpartCharCode (char) {
  return isUpperCase(char) ? char.toLowerCase().charCodeAt(0) : char.toUpperCase().charCodeAt(0);
}

function isUpperCase (item) {
  return item.toUpperCase() === item;
}

console.log(counterpartCharCode('a'));
