/*
 *
 *Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
 *
 *Examples
 *arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 *
 *arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 *
 *arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 *Notes
 *Notice that num is also included in the returned array.
 */

// Solution 1:
function arrayOfMultiples (num, length) {
  const array = [];

  for (let i = 1; i <= length; i++) {
    array.push(num * i);
  }

  return array;
}

console.log(arrayOfMultiples(12, 6));

/*
 * Solution 2 using Array.from
 * The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
 */

function arrayOfMultiples1 (num, length) {
  const exampleArray = [3, 4, 5];
  console.log(Array.from(exampleArray, i => i * 2)); // This will return an array of [6,8,10

  return Array.from({length : 5}, (_, i) => num * (i + 1));
}

console.log(arrayOfMultiples1(12, 6));
