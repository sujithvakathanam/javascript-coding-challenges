/*
 * https://edabit.com/challenge/wNhCHwPXNLJwrTith
 * Days in a Month
 * Create a function that takes the month and year (as integers) and returns the number of days in that month.
 *
 *   Examples
 * days(2, 2018) ➞ 28
 *
 * days(4, 654) ➞ 30
 *
 * days(2, 200) ➞ 28
 *
 * days(2, 1000) ➞ 28
 * Notes
 * Don't forget about leap years!
 */

/*
 * Here 0 represents the last day of the month
 * getDate gets the total number of days in that month
 */
function days (month, year) {
  return new Date(year, month, 0).getDate();
}

console.log(days(1, 2018));
console.log(days(4, 654));
