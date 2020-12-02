/*
 * https://edabit.com/challenge/5xrKJPsXLG3czFpuq
 * Is it an Object?
 *     Create a function to check whether the given parameter is an Object or not.
 *
 *     Examples
 * isObject(function add(x,y) {return x + y}) ➞ true
 *
 * isObject(new RegExp("^[a-zA-Z0-9]+$)", "g")) ➞ true
 *
 * isObject(null) ➞ false
 *
 * isObject("") ➞ false
 * Notes
 * Inputs may be null, primitive wrapper types, dates.
 */

function isObject (value) {
  if (value === null || '') {
    return false;
  }

  return typeof value === 'object';

  /*
   *  Typeof (null) is an object;
   * typeof('') is a string;
   */
}
console.log(isObject(function add (x, y) {
  return x + y;
}));

// Console.log(isObject(new RegExp("^[a-zA-Z0-9]+$)", "g")));
console.log(isObject(null));
console.log(isObject(''));
