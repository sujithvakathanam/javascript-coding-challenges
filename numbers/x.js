/*
 * https://edabit.com/challenge/at7jF9Y7SmPGyD92u
 * Is the Number Symmetrical?
 *     Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.
 *
 *     Examples
 * isSymmetrical(7227) ➞ true
 *
 * isSymmetrical(12567) ➞ false
 *
 * isSymmetrical(44444444) ➞ true
 *
 * isSymmetrical(9939) ➞ false
 *
 * isSymmetrical(1112111) ➞ true
 * Notes
 * N/A
 */

function isSymmetrical (num) {
  return [...num.toString()].reverse().join('') === num.toString();
}

console.log(isSymmetrical(7227));
