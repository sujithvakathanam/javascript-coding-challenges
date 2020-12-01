/*
 * https://edabit.com/challenge/P4zxwFNwZPGeiDwKy
 * Extend the Vowels
 * Create a function that takes a word and extends all vowels by a number num.
 *
 *   Examples
 * extendVowels("Hello", 5) ➞ "Heeeeeelloooooo"
 *
 * extendVowels("Edabit", 3) ➞ "EEEEdaaaabiiiit"
 *
 * extendVowels("Extend", 0) ➞ "Extend"
 * Notes
 * Return "invalid" if num isn't 0 or a positive integer.
 */

function extendVowels (word, num) {
  if (Math.sign(num) === -1 || Number.isInteger(num) === false) {
    return 'invalid';
  }
  const resultArr = [];
  [...word].map(item => (item.match(/[aeiou]/gi) !== null ? resultArr.push(item.repeat(num + 1)) : resultArr.push(item)));

  return resultArr.join('');
}
console.log(extendVowels('Vowel', 0.5));
