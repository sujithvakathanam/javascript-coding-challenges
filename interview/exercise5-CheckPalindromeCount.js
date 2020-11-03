/*
 * https://edabit.com/challenge/BRoBDeEc2be7wm8BD
 * Count Palindrome Numbers in a Range
 * Create a function that returns the number of palindrome numbers in a specified range (inclusive).
 *
 *   For example, between 8 and 34, there are 5 palindromes: 8, 9, 11, 22 and 33. Between 1550 and 1552 there is exactly one palindrome: 1551.
 *
 * Examples
 * countPalindromes(1, 10) ➞ 9
 *
 * countPalindromes(555, 556) ➞ 1
 *
 * countPalindromes(878, 898) ➞ 3
 * Notes
 * Single-digit numbers are trivially palindrome numbers.
 */

function countPalindromes (num1, num2) {
  let count = 0;
  for (let i = num1; i <= num2; i++) {
    i.toString().split('')
      .reverse()
      .join('') === i.toString() ? count += 1 : null;
  }

  return count;
}

console.log(countPalindromes(878, 898));
