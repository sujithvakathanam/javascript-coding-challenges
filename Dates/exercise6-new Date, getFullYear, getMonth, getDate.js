/*
 * https://edabit.com/challenge/CJo2NPyHDb5YyDu2S
 * Reformatting the Date
 * Create a function that converts dates from one of five string formats:
 *
 *   "January 9, 2019" (MM D, YYYY)
 * "Jan 9, 2019" (MM D, YYYY)
 * "01/09/2019" (MM/DD/YYYY)
 * "01-09-2019" (MM-DD-YYYY)
 * "01.09.2019" (MM.DD.YYYY)
 * The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:
 *
 *   Examples
 * convertDate("January 9, 2019") ➞ [1, 9, 2019]
 *
 * convertDate("Jan 9, 2019") ➞ [1, 9, 2019]
 *
 * convertDate("01/09/2019") ➞ [1, 9, 2019]
 *
 * convertDate("01-09-2019") ➞ [1, 9, 2019]
 *
 * convertDate("01.09.2019") ➞ [1, 9, 2019]
 * Notes
 * You can solve this any number of ways, but using JavaScript's new Date() method is probably the easiest. Check the Resources tab for documentation.
 */

// Solution1 = Using Date method
function convertDate (date) {
  const dateRetrieved = new Date(date);
  const year = dateRetrieved.getFullYear();
  const month = dateRetrieved.getMonth();
  const day = dateRetrieved.getDate();

  return [month + 1, day, year];
}
console.log(convertDate('January 9, 2019'));
console.log(convertDate('Jan 9, 2019'));
console.log(convertDate('01/09/2019'));
console.log(convertDate('01-09-2019'));
console.log(convertDate('01.09.2019'));
