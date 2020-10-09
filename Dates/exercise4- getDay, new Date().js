/*
 * Friday the 13th
 * Given the month and year as numbers, return whether that month contains a Friday 13th.
 *
 *   Examples
 * hasFriday13(3, 2020) ➞ true
 *
 * hasFriday13(10, 2017) ➞ true
 *
 * hasFriday13(1, 1985) ➞ false
 * Notes
 * January will be given as 1, February as 2, etc ...
 */

const obj = {
  0 : 'Sunday',
  1 : 'Monday',
  2 : 'Tuesday',
  3 : 'Wednesday',
  4 : 'Thursday',
  5 : 'Friday',
  6 : 'Saturday'
};

function hasFriday13 (month, year) {
  const newDate = new Date(year, month - 1, 13);
  const day = newDate.getDay();
  const currentTimeInSeconds = Math.floor(Date.now() / 1000); // Unix timestamp in seconds
  const currentTimeInMilliseconds = Date.now();
  console.log(currentTimeInMilliseconds);
  console.log(currentTimeInSeconds);

  return obj[day] === 'Friday';
}

console.log(hasFriday13(3, 2020));
