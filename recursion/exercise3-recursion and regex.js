// https://edabit.com/challenge/rKeYpxFeRQRP2Afg7
// No Yelling
// Create a function that transforms sentences ending with multiple question marks ? or exclamation marks ! into a sentence only ending with one without changing punctuation in the middle of the sentences.
//
//   Examples
// NoYelling("What went wrong?????????") ➞ "What went wrong?"
//
// NoYelling("Oh my goodness!!!") ➞ "Oh my goodness!"
//
// NoYelling("I just!!! can!!! not!!! believe!!! it!!!") ➞ "I just!!! can!!! not!!! believe!!! it!"
// // Only change repeating punctuation at the end of the sentence.
//
// NoYelling("Oh my goodness!") ➞ "Oh my goodness!"
// // Do not change sentences where there exists only one or zero exclamation marks/question marks.
//
// NoYelling("I just cannot believe it.") ➞ "I just cannot believe it."
// Notes
// Only change ending punctuation - keep the exclamation marks or question marks in the middle of the sentence the same (see third example).
// Don't worry about mixed punctuation (no cases that end in something like ?!??!).
// Keep sentences that do not have question/exclamation marks the same.

// Solution1 using recursion
// eslint-disable-next-line complexity,consistent-return
function noYelling (phrase) {
  const len = phrase.length;
  if (phrase[len - 1] !== '?' && phrase[len - 1] !== '!') {
    return phrase;
  }

  if (phrase[len - 1] === '?' && phrase[len - 2] !== '?' || phrase[len - 1] === '!' && phrase[len - 2] !== '!') {
    return phrase;
  }

  if (phrase[len - 2] === '?' || phrase[len - 2] === '!') {
    return noYelling(phrase.slice(0, len - 1)); // Please note the recursion method
  }
}
console.log(noYelling('I just cannot believe it.'));
console.log(noYelling('Oh my goodness!'));
console.log(noYelling('I just!!! can!!! not!!! believe!!! it!!!'));
console.log(noYelling('What went wrong?????????'));

// Solution2 -using regex -Very important

function noYelling1 (phrase) {
  return phrase.replace(/([?!])+$/g, '$1'); // $ matches one or more of the preceeding token
}
console.log(noYelling1('I just cannot believe it.'));
console.log(noYelling1('Oh my goodness!'));
console.log(noYelling1('I just!!! can!!! not!!! believe!!! it!!!'));
console.log(noYelling1('What went wrong?????????'));
