/*
 * https://edabit.com/challenge/NyQF2kPYt3YHdhhjn
 * Find the First Non-Repeated Character
 * Create a function that accepts a string as an argument and returns the first non-repeated character.
 *
 *   Examples
 * firstNonRepeatedCharacter("g") ➞ "g"
 *
 * firstNonRepeatedCharacter("it was then the frothy word met the round night") ➞ "a"
 *
 * firstNonRepeatedCharacter("the quick brown fox jumps then quickly blows air") ➞ "f"
 *
 * firstNonRepeatedCharacter("hheelloo") ➞ false
 *
 * firstNonRepeatedCharacter("") ➞ false
 * Notes
 * An empty string should return false.
 *   If every character repeats, return false.
 *   Don't worry about case sensitivity or non-alphanumeric characters.
 */

function firstNonRepeatedCharacter (str) {
  const strArray = str.split('');
  const uniqueArray = Array.from(new Set(strArray));
  const nonrepeatedArray = uniqueArray.filter(item => strArray.indexOf(item) === strArray.lastIndexOf(item));

  return nonrepeatedArray.length > 0 ? nonrepeatedArray[0] : false;
}

console.log(firstNonRepeatedCharacter('it was then the frothy word met the round night'));
console.log(firstNonRepeatedCharacter(''));
console.log(firstNonRepeatedCharacter("hheelloo"));
