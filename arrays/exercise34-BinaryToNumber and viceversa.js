// /*
//  *Reversing a Binary String
//  *Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.
//  *
//  *Examples
//  *ReversedBinaryInteger(10) ➞ 5
//  *// 10 = 1010 -> 0101 = 5
//  *
//  *ReversedBinaryInteger(12) ➞ 3
//  *// 12 = 1100 -> 0011 = 3
//  *
//  *ReversedBinaryInteger(25) ➞ 19
//  *// 25 = 11001 -> 10011 = 19
//  *
//  *ReversedBinaryInteger(45) ➞ 45
//  *// 45 = 101101 -> 101101 = 45
//  *Notes
//  *All values of n will be positive.
//  */

function reversedBinaryInteger (num) {
  const binaryNo = (num >>> 0).toString(2); // Number to binary string
  const reverseNo = binaryNo.split('').reverse()
    .join('');

  return parseInt(reverseNo, 2);// Binary string to number
}
console.log(reversedBinaryInteger(10));
