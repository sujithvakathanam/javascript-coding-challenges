// /*
//  *Odds vs. Evens
//  *Given an integer, return "odd" if the sum of all odd digits is greater than the sum of all even digits. Return "even" if the sum of even digits is greater than the sum of odd digits, and "equal" if both sums are the same.
//  *
//  *Examples
//  *OddsVsEvens(97428) ➞ "odd"
//  *// odd = 16 (9+7)
//  *// even = 14 (4+2+8)
//  *
//  *OddsVsEvens(81961) ➞ "even"
//  *// odd = 11 (1+9+1)
//  *// even = 14 (8+6)
//  *
//  *OddsVsEvens(54870) ➞ "equal"
//  *// odd = 12 (5+7)
//  *// even = 12 (4+8+0)
//  *Notes
//  *N/A
//  */

function oddsVsEvens (num) {
  let odd = 0;
  let even = 0;
  while (num > 0) {
    const item = num % 10;
    console.log('item is', item);
    item % 2 === 0 ? even += item : odd += item;
    // eslint-disable-next-line no-param-reassign
    num = Math.floor(num / 10);
  }
  if (odd === even) {
    return 'equal';
  }

  return odd > even ? 'odd' : 'even';
}
console.log(oddsVsEvens(81961));
