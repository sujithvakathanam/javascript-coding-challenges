/*
 * If the number is negative, treat it like it's positive./!**!/
 * Reverse the Number
 * Create a function that takes an integer n and reverses it.
 *
 * Examples
 *
 * rev(5121) ➞ "1215"
 *
 * rev(69) ➞ "96"
 * rev(-122157) ➞ "751221"
 * Notes
 * This challenge is about using two operators that are releated to division.
 */

// Solution 1:
function reverseNumber (n) {
  const newArray = [];
  let returnNo = Math.abs(n); // Returns the absolute value of number

  while (returnNo > 0) {
    newArray.push(returnNo % 10);
    returnNo = Math.floor(returnNo / 10); // Returns the largest integer less than or equal to that number
  }

  console.log(newArray);
  const newNumber = newArray.join('');

  return newNumber;
}

// Solution 2
function rev (n) {
  return Math.abs(n).toString()
    .split('')
    .reverse()
    .join('');
}

console.log(reverseNumber(-122157));
console.log(rev(-122157));
