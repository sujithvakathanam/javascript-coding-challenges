/*
 * https://edabit.com/challenge/FPamWj3Ky7ep9ApBz
 *  Check for Anagrams
 *    Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.
 *
 *  Examples
 *  isAnagram("cristian", "Cristina") ➞ true
 *
 *  isAnagram("Dave Barry", "Ray Adverb") ➞ true
 *
 *  isAnagram("Nope", "Note") ➞ false
 *  Notes
 *  Should be case insensitive.
 *    The two given strings can be of different lengths.
 */

// Solution1 -using Array.sort
function isAnagram (s1, s2) {
  return s2.toLowerCase().split('')
    .sort((c, d) => c.localeCompare(d))
    . join('') === s1.toLowerCase().split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
}
console.log(isAnagram('cristian', 'Cristina'));
