// Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string.
//
//     Examples
// FirstVowel("apple") ➞ 0
//
// FirstVowel("hello") ➞ 1
//
// FirstVowel("STRAWBERRY") ➞ 3
//
// FirstVowel("pInEaPPLe") ➞ 1
// Notes
// Input will be single words.
//     Characters in words will be upper or lower case.
// "y" is not considered a vowel.
//     Input always contains a vowel.
//     */

/*
 * Solution1
 * g refers to search globally , i refers to case insensitive. regex is represented as /[]/
 */
function firstVowel (str) {
  const regex = /[aeiou]/gi;

  return str.search(regex);
}

console.log(firstVowel('STRAWBERRY'));

/* Solution 2*/ // Using stirng.match and string.index--please note i here refers to case insensitive matches
function firstVowel1 (str) {
  return str.indexOf(str.match(/[aeiou]/i));
}

console.log(firstVowel1('STRAWBERRY'));
