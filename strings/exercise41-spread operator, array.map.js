// Smiley Faces :)
// You will be given a string of characters containing only the following characters: ():
//
//   Create a function returns a number based on the number of sad and smiley faces there is.
//
//   The happy faces :) and (: are worth 1.
// The sad faces :( and ): are worth -1.
// Working Example
// HappinessNumber(":):(") ➞ -1
// // The first 2 characters are :)        +1      Total: 1
// // The next 2 are ):                    -1      Total: 0
// // The last 2 are :(                    -1       Total: -1
// Examples
// HappinessNumber(":):(") ➞ -1
//
// HappinessNumber("(:)") ➞ 2
//
// HappinessNumber("::::") ➞ 0
// Notes
// All test cases will be valid.

function happinessNumber (s) {
  const obj = {
    ':)' : 1,
    '(:' : 1,
    ':(' : -1,
    '):' : -1
  };
  let result = 0;
  // eslint-disable-next-line array-callback-return
  [...s].map((item, index, arr) => {
    if (index !== arr.length - 1) {
      obj[arr[index].concat(arr[index + 1])] !== undefined ? result += obj[arr[index].concat(arr[index + 1])] : result;
    }
  });

  return result;
}

console.log(happinessNumber('::::'));
console.log(happinessNumber(':):('));
