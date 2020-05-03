/*
 *
 * Return the Objects Keys and Values
 * Create a function that takes an object and returns the keys and values as separate arrays.
 *
 * Examples
 * keysAndValues({ a: 1, b: 2, c: 3 })
 * ➞ [["a", "b", "c"], [1, 2, 3]]
 *
 * keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
 * ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
 *
 * keysAndValues({ key1: true, key2: false, key3: undefined })
 * ➞ [["key1", "key2", "key3"], [true, false, undefined]]
 * Notes
 * N/A
 */

// Solution 1- Object.keys(obj) => returns an array
function keysAndValues (obj) {
  const newArr = [];
  const keys = Object.keys(obj); // Returns an array
  newArr.push(keys);
  const values = Object.values(obj); // Returns an arry
  newArr.push(values);

  return newArr;
}

console.log(keysAndValues({a : 'Apple', b : 'Microsoft', c : 'Google'}));

// Solution 2

function keysAndValues1 (obj) {
  const arr = Object.keys(obj);

  return [arr, arr.map(item => obj[item])];
}

console.log(keysAndValues1({a : 'Apple', b : 'Microsoft', c : 'Google'}));
