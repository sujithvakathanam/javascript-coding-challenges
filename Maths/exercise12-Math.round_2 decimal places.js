/*
 * https://edabit.com/challenge/L4Hevck84exPwe4wo
 * Find the Discount
 * Create a function that takes two arguments: the final price and the discount percentage as integers and returns the final price after the discount.
 *
 *   Alternative Text
 *
 * Examples
 * dis(1500, 50) ➞ 750
 *
 * dis(89, 20) ➞ 71.2
 *
 * dis(100, 75) ➞ 25
 * Notes
 * Your answer should be rounded to two decimal places.
 *
 *   Test Passed: Value == 25
 * Test Passed: Value == 105.5
 * Test Passed: Value == 231.27
 * Test Passed: Value == 338.6
 * Test Passed: Value == 630
 */

/*
 * Rounding with math.round is accurate
 * https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
 */
function dis (price, discount) {
  const num = parseFloat(price - discount / 100 * price);

  return Math.round((num + Number.EPSILON) * 100) / 100;
}

console.log(dis(593, 61));
console.log(dis(1693, 80));
