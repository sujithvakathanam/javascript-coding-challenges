// eslint-disable-next-line multiline-comment-style
// Palindromic Dates
// The 2nd of February 2020 is a palindromic date in both dd/mm/yyyy and mm/dd/yyyy format (02/02/2020). Given a date in dd/mm/yyyy format, return true if the date is palindromic in both date formats.
//
// Examples
// PalindromicDate("02/02/2020") ➞ true
//
// PalindromicDate("11/12/2019") ➞ false
//
// PalindromicDate("11/02/2011") ➞ false
// // Although 11/02/2011 is palindromic in dd/mm/yyyy format,
// // it isn't in mm/dd/yyyy format (02/11/2011)
// Notes
// All dates will be valid in both date formats.

/*
 * Please note a palindromic date is one where month === day and also  m+d ==== reverse of year
 * Ie. 02/02/2020 => month and day are same, Also 0202 === 0202(reverse of the year)
 * Solution3 below is the right answer
 */
/* Solution 1 using string.slice*/

function palindromicDate (date) {
  const dt = date.slice(0, 2);
  const mth = date.slice(3, 5);
  const yy = date.slice(6, 10);
  const dateinMMDDYY = `${mth}/${dt}/${yy}`;

  return dateinMMDDYY === date;
}

console.log(palindromicDate('03/03/1822'));

/* Solution 2 using array.slice and array.reverse*/

function palindromicDate1 (date) {
  const dtArray = date.split('/');
  const dtMthArray = dtArray.slice(0, dtArray.length - 1);
  const mmDDArray = dtMthArray.reverse();

  return mmDDArray.join('') === dtMthArray.join('');
}

console.log(palindromicDate1('03/03/1822'));

/* Solution3*/
function palindromicDate3 (date) {
  const [m, d, y] = date.split('/');

  return m === d && m + d === [...y].reverse().join('');
}

console.log(palindromicDate3('03/03/1822'));
