//  *Equality Check
// In this challenge, you must verify the equality of two different given parameters: a and b.
//
// Both the value and the type of parameters need to be tested in order to have an matching equality. The possible types of the given parameters are:
//
// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learnt so far that will permit you to do two different checks (value and type) with a single statement?
//
// Implement a function that returns true if the parameters are equal, and false if they are different.
//
// Examples
// CheckEquality(1, true) ➞ false
// // A number and a boolean: their type is different
//
// CheckEquality(0, "0") ➞ false
// // A number and a string: their type is different
//
// CheckEquality(1,  1) ➞ true
// // A number and a number: their type and value are equal
// Notes
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
//

// Solution1
function checkEquality (a, b) {
  return typeof a === typeof b ? a === b : false;
}

console.log(checkEquality(1, 1));
