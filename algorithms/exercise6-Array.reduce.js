// https://edabit.com/challenge/EY4nTmp6SbAmtJz5C
// Sum of Odd and Even Numbers
// Write a function that takes an array of numbers and returns an array with two elements:
//
//   The first element should be the sum of all even numbers in the array.
//   The second element should be the sum of all odd numbers in the array.
//   Example
// SumOddAndEven([1, 2, 3, 4, 5, 6]) ➞ [12, 9]
// // 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9
//
// SumOddAndEven([-1, -2, -3, -4, -5, -6]) ➞ [-12, -9])
//
// SumOddAndEven([0, 0]) ➞ [0, 0])
// Notes
// Count 0 as an even number.

function sumOddAndEven (arr) {
  const newArr = [];
  newArr[0] = arr.reduce((acc, cv, index) => {
    return index % 2 !== 0 ? acc + cv : acc
  }, 0);
  newArr[1] = arr.reduce((acc, cv, index) => {
    return index % 2 === 0 ? acc + cv : acc
  }, 0);
  return newArr;
}

console.log(sumOddAndEven([1, 2, 3, 4, 5, 6]));
console.log(sumOddAndEven([-1, -2, -3, -4, -5, -6]));
