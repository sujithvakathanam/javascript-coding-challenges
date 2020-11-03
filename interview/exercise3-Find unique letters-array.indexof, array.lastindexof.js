/*
 * https://edabit.com/challenge/4fY7BRiPga8MEvYGQ
 *  Find the Unique Letters
 *  Create a function that takes a string and returns the letters that occur only once.
 *
 *    Examples
 *  findLetters("monopoly") ➞ ["m", "n", "p", "l", "y"]
 *
 *  findLetters("balloon") ➞ ["b", "a", "n"]
 *
 *  findLetters("analysis") ➞ ["n", "l", "y", "i"]
 *  Notes
 *  The final array should not include letters that appear more than once in the string.
 *    Return the letters in the sequence they were originally in, do not sort them.
 *    All letters will be in lowercase.
 */

// Solution1
function findLetters (str) {
  const uniqueArray = Array.from(new Set([...str]));
  const strArray = str.split('');

  return uniqueArray.filter(item => strArray.indexOf(item) === strArray.lastIndexOf(item));
}

console.log(findLetters('monopoly'));
