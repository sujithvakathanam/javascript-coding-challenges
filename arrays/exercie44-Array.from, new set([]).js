/*
 * https://edabit.com/challenge/cgSmKhr3Hzez2Pt9n
 * Remove Repeated Characters
 * Create a function that will remove any repeated charcter(s) in a word passed to the function. Not just consecutive characters, but characters repeating anywhere in the input.
 *
 *   Examples
 * unrepeated("hello") ➞ "helo"
 *
 * unrepeated("aaaaa") ➞ "a"
 *
 * unrepeated("WWE!!!") ➞ "WE!"
 *
 * unrepeated("call 911") ➞ "cal 91"
 * Notes
 * No more than two words will be passed.
 *   Try to use new data type introduced in ES6.
 *   Notice that a string is iterable.
 */

function unrepeated (str) {
  return Array.from(new Set([...str])).join('');
}

console.log(unrepeated('hello'));
