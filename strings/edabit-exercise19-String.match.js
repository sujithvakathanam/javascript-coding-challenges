
/*
 * Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
 *
 * Examples
 * charCount("a", "edabit") ➞ 1
 *
 * charCount("c", "Chamber of secrets") ➞ 1
 *
 * charCount("b", "big fat bubble") ➞ 4
 * Notes
 * Your output must be case-sensitive (see second example).
 */

// Solution1 using str.match */ // please note str.match returns an array..if there are no match items, it returns a null,
function charCount (myChar, str) {
  return (str.match(new RegExp(myChar, 'g')) || []).length; // Please note , if there is no matching item or []-effectively lenght will be zero
}
console.log(charCount('b', 'big fat bubble'));
console.log(charCount('a', 'edabit'));
console.log(charCount('z', 'Chamber of secrets'));

// Solution 2 using arrays
function charCount1 (myChar, str) {
  return str.split('').filter(item => item === myChar).length;
}
console.log(charCount1('b', 'big fat bubble'));
console.log(charCount1('a', 'edabit'));
console.log(charCount1('c', 'Chamber of secrets'));
