// /https://edabit.com/challenge/PWqkt9HiLcJSr6QEY
// Sum of Number Elements in an Array
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
//
//   Examples
// NumbersSum([1, 2, "13", "4", "645"]) ➞ 3
//
// NumbersSum([true, false, "123", "75"]) ➞ 0
//
// NumbersSum([1, 2, 3, 4, 5, true]) ➞ 15
// Notes
// Check the Resources tab for help.

// Solution1- Using arrays.map
function numbersSum (arr) {
  let sum = 0;
  arr.map(item => {
    if (typeof item === 'number') {
      sum += item;
    }
  });

  return sum;
}

console.log(numbersSum([1, 2, '13', '4', '645']));

// Solution2- Using arrays.filter, arrays.reduce
function numbersSum1 (arr) {
  return arr.filter(item => typeof item === 'number').reduce((acc, cv) => acc + cv);
}

console.log(numbersSum1([1, 2, '13', '4', '645']));
