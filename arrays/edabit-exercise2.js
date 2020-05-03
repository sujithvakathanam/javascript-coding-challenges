/*
 *Create a function that takes three integer arguments (a, b, c) and returns the number of equal values.
 *
 *    Examples
 *equal(3, 4, 3) ➞ 2
 *
 *equal(1, 1, 1) ➞ 3
 *
 *equal(3, 4, 1) ➞ 0
 */

const unique = function (a, b, c) {
  const NumberArray = [a, b, c];

  const uniqueNumber = new Set(NumberArray);
  console.log(uniqueNumber);
  console.log(uniqueNumber.size);

  return NumberArray.length - uniqueNumber.size;
};

console.log(unique(6, 6, 6));

/*
 *
 *Create a function that takes in an array (slot machine outcome) a/!*nd returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
 *
 *    Examples
 *testJackpot(["@", "@", "@", "@"]) ➞ true
 *
 *testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
 *
 *testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
 *
 *testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
 *
 *testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
 *Notes
 *The elements must be exactly identical for there to be a jackpot.*!/
 */

// Solution 1:
const testJackpot = function (arr) {
  let result;

  const newUniqueArr = new Set(arr); // Creates an array of unique values
  console.log('new Unique array is ', newUniqueArr);

  result = arr.every(item => {
    console.log('item is', item);

    return item.toString() == newUniqueArr.values().next().value;
  }); // Every method tests whether all elements in the array pass the test implemented by the provided function and returns true or false

  return result;
};

const arr = ['1', '1', '1', '1'];
console.log(testJackpot(arr));

// Solution 2:

const arr1 = ['1', '1', '1', '1'];

const testJackpot1 = arr => new Set(arr).size === 1;

console.log(testJackpot1(arr1));
