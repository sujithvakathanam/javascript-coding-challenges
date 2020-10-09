/*
 * Highest Digit
 * Create a function that takes a number as an argument and returns the highest digit in that number.
 *
 *   Examples
 * highestDigit(379) ➞ 9
 *
 * highestDigit(2) ➞ 2
 *
 * highestDigit(377401) ➞ 7
 * Notes
 * Don't forget to return the result.
 * If you get stuck on a challenge, find help in the Resources tab.
 *   If you're really stuck, unlock solutions in the Solutions tab.
 */

function highestDigit (number) {
  return [...number.toString()].reduce((acc, cv) => (+cv > +acc ? acc = +cv : +acc), 0);
}

console.log(highestDigit(379));
