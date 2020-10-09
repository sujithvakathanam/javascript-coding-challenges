/*
 * How Many Vowels?
 *   Create a function that takes a string and returns the number (count) of vowels contained within it.
 *
 *   Examples
 * countVowels("Celebration") ➞ 5
 *
 * countVowels("Palm") ➞ 1
 *
 * countVowels("Prediction") ➞ 4
 * Notes
 * a, e, i, o, u are considered vowels (not y).
 * All test cases are one word and only contain letters.
 */

// Solution1
function countVowels (str) {
  return str.match(/[aeiou]/g).length;
}

console.log(countVowels('Celebration'));
