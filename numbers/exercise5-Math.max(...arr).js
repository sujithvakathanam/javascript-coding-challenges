/*
 * https://edabit.com/challenge/9fpBX9AFizhDeFk8R
 * A Long Long Time
 * Create a function that takes three values:
 *
 *   h hours
 * m minutes
 * s seconds
 * Return the value that's the longest duration.
 *
 * Examples
 * longestTime(1, 59, 3598) ➞ 1
 *
 * longestTime(2, 300, 15000) ➞ 300
 *
 * longestTime(15, 955, 59400) ➞ 59400
 * Notes
 * No two durations will be the same.
 */

function longestTime (h, m, s) {
  const resultArray = [h, m, s];
  const arr = [];
  arr.push(h * 60 * 60);
  arr.push(m * 60);
  arr.push(s);

  return resultArray[arr.indexOf(Math.max(...arr))];
}

console.log(longestTime(1, 59, 3598));
