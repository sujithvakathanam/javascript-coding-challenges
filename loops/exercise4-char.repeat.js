/*
 * Repeating Letters N Times
 * Create a function that repeats each character in a string n times.
 *
 *     Examples
 * repeat("mice", 5) ➞ "mmmmmiiiiiccccceeeee"
 *
 * repeat("hello", 3) ➞ "hhheeellllllooo"
 *
 * repeat("stop", 1) ➞ "stop"
 * Notes
 * N/A
 */

function repeat (mice, number) {
  const resultArray = [];
  [...mice].map((item, index) => resultArray.push(item.repeat(number)));

  console.log(resultArray);

  return resultArray.join('');
}

console.log(repeat('mice', 5));
