/*
 *
 * Square Every Digit
 * Create a function that squares every digit of a number.
 *
 * Examples
 * squareDigits(9119) ➞ 811181
 *
 * squareDigits(2483) ➞ 416649
 *
 * squareDigits(3212) ➞ 9414
 * Notes
 * The function receives an integer and must return an integer.
 *
 */

// Solution1
function squareDigits (n) {
  const newNum = [];
  while (n > 0) {
    const sqNumber = n % 10 * (n % 10);
    newNum.unshift(sqNumber); // Adds elements to the beginning of the array
    n = Math.floor(n / 10); // Rounds a number down and returns an Integer value
  }

  // eslint-disable-next-line radix
  return parseInt(newNum.join(''));
}

console.log(squareDigits(9119));

/* Solution2*/
function squareDigits1 (n) {
  return Number([...String(n)].map(item => item * item).join('')); // Map will return an array, Join will return a string, + will return a number
}

console.log(squareDigits1(9119));
