/*
 * Get the Date
 * Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".
 *
 * To illustrate, the day of the week for "12/07/2016" is "Wednesday".
 *
 * Examples
 * getDay("12/07/2016") ➞ "Wednesday"
 *
 * getDay("09/04/2016") ➞ "Sunday"
 *
 * getDay("12/08/2011") ➞ "Thursday"
 * Notes
 * This challenge assumes the week starts on Sunday.
 *
 */

// Solution1
const obj = {
  0 : 'Sunday',
  1 : 'Monday',
  2 : 'Tuesday',
  3 : 'Wednesday',
  4 : 'Thursday',
  5 : 'Friday',
  6 : 'Saturday'
};

function getDay (day) {
  day = new Date(day); // Converts string to a Date
  console.log('day is', day);

  return obj[day.getDay()]; // GetDay returns the day of the date
}

console.log(getDay('12/07/2016'));

/* Solution 2 */
const getDay1 = day => {
  console.log(new Date(day).toLocaleString('en-gb', {timeZone : 'UTC'}));

  return new Date(day).toLocaleString('en-gb', {weekday : 'long'});
};

console.log(getDay1('12/07/2016'));
