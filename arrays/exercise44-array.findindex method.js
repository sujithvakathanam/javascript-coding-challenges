/*
 * Finding Nemo
 * You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".
 *
 * If you can't find Nemo, return "I can't find Nemo :(".
 *
 * Examples
 * findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
 *
 * findNemo("Nemo is me") ➞ "I found Nemo at 1!"
 *
 * findNemo("I Nemo am") ➞ "I found Nemo at 2!"
 * Notes
 * ! , ? . are always separated from the last word.
 *   Nemo will always look like Nemo, and not NeMo or other capital variations.
 *   Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
 *   If there are multiple Nemo's in the sentence, only return for the first one.
 */

//  Solution1
function findNemo (sentence) {
  const newArr = sentence.split(' ');
  const foundArray = [];
  newArr.map((item, index) => (item === 'Nemo' ? foundArray.push(index + 1) : item));
  if (foundArray.length > 0) {
    return `I found Nemo at ${foundArray[0]}!`;
  }

  return 'I can\'t find Nemo :(';
}

console.log(findNemo('I am Ne mo Nemo !'));

// Solution2 -using Array.findIndex
function findNemo1 (sentence) {
  const newArr = sentence.split(' ');

  const result = newArr.findIndex((item, index) => item === 'Nemo');

  if (result !== -1) {
    return `I found Nemo at ${result + 1}!`;
  }

  return 'I can\'t find Nemo :(';
}

console.log(findNemo1('I am Ne mo Nemo !'));
