
/*
https://edabit.com/challenge/otouNcoRc4nswPKHJ
 * Extending the String Prototype
 * Javascript has a String prototype default in the language which contains properties and methods such as .length and .toLowerCase(). Extend the String prototype by creating two new methods:
 *
 * .consonants(), which returns the number of consonants in a word when called.
 *     .vowels(), which returns the number of vowels in a word when called.
 *     Examples
 * "hello".consonants() ➞ 3
 * "hello".vowels() ➞ 2
 *
 * "greatly".consonants() ➞ 5
 * "greatly".vowels() ➞ 2
 *
 * "Smithsonian".consonants() ➞ 7
 * "Smithsonian".vowels() ➞ 4
 * Notes
 * Treat y as a consonant, not a vowel.
 *     Upper vs. lower case does not matter.
 *     Hint: See comments for another example if you get stuck.
 *     It is not mandatory for this exercise, but in general it is a good idea to double-check
 *     if there exists
 *     methods
 *     with the same name a your custom functions before using them to extend the prototype. This is to prevent the accidental overwrite of a pre-existing method. (See comments for additional info).
 */

String.prototype.consonants = function (item) {
  // Write your code here
  return item;

};

String.prototype.vowels = function () {
  // Write your code here

};

console.log('hello'.consonants(this));
