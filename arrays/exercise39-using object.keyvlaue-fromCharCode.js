// Crypto Wars: Missing Number
// Our fleet managed to get one of the enemy's top-secret codes from the remains of its fallen ship. The codes were immediately sent over to our code-breaking base over at Bleckley Park ;) for analysis. The team found that each code contains 25 numbers with one missing. The missing number corresponds to a letter in the English alphabet. Your job is to find a more efficient Method of decrypting the messages by digitizing the process.
//
// Write a function that takes an array, detects the missing number (in the array), and returns its corresponding letter.
//
//     Examples
// Decrypt([24, 12, 2, ..., 25]) ➞ "N"
// // The missing number is 14.
//
// Decrypt([24, 12, 2, ..., 25]) ➞ "O"
// // The missing number is 15.
//
// Decrypt([24, 12, 2, ..., 25]) ➞ "P"
// // The missing number is 16.
// Notes
// The array will only contain positive integers from 1 to 26 with one missing.
//     There will be no duplicate numbers.
//     Return the capital letter.

function decrypt (arr) {
  const newArr = [];
  for (let i = 1; i < 27; i++) {
    newArr.push(i);
  }
  const missingNo = newArr.find(item => !arr.includes(item));

  for (const [key, value] of Object.entries(obj)) {
    if (value === missingNo) {
      return key;
    }
  }
}

const obj = {
  A : 1,
  B : 2,
  C : 3,
  D : 4,
  E : 5,
  F : 6,
  G : 7,
  H : 8,
  I : 9,
  J : 10,
  K : 11,
  L : 12,
  M : 13,
  N : 14,
  O : 15,
  P : 16,
  Q : 17,
  R : 18,
  S : 19,
  T : 20,
  U : 21,
  V : 22,
  W : 23,
  X : 24,
  Y : 25,
  Z : 26
};

console.log(decrypt([21, 2, 5, 25, 7, 20, 15, 3, 6, 9, 16, 19, 1, 4, 11, 22, 10, 13, 12, 18, 24, 17, 23, 14, 26]));

const decrypt1 = arr => String.fromCharCode(arr.reduce((a, c) => a - c, 415));

console.log(decrypt1([21, 2, 5, 25, 7, 20, 15, 3, 6, 9, 16, 19, 1, 4, 11, 22, 10, 13, 12, 18, 24, 17, 23, 14, 26]));
