/*
 *Is the Number Symmetrical?
 *Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not.
 *  A number is symmetrical when it is the same as its reverse.
 *
 *Examples
 *isSymmetrical(7227) ➞ true
 *
 *isSymmetrical(12567) ➞ false
 *
 *isSymmetrical(44444444) ➞ true
 *
 *isSymmetrical(9939) ➞ false
 *
 *isSymmetrical(1112111) ➞ true
 *Notes
 *N/A
 */

// Solution 1
function isSymmetrical1 (num) {
  const reverseNum = [...String(num)].reverse();

  return Number(reverseNum.join('')) === num;
}

console.log(isSymmetrical1(7227));
