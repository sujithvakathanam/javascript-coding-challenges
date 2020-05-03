/*
 *A Redundant Function
 *Write a function redundant that takes in a string str and returns a function that returns str.
 *
 *Examples
 *const f1 = redundant("apple")
 *f1() ➞ "apple"
 *
 *const f2 = redundant("pear")
 *f2() ➞ "pear"
 *
 *const f3 = redundant("")
 *f3() ➞ ""
 *Notes
 *Your function should return a function, not a string.
 */

/* Solution1*/
function redundant (str) {
  const newStr = str;

  return function newFunc () {
    return newStr;
  };
}
const f1 = redundant('apple');
const f2 = redundant('pear');
console.log(f1());
console.log(f2());

/* Solution 2*/
const redundant1 = str => () => str; // Check this out

const f11 = redundant1('apple');
const f12 = redundant1('pear');
console.log(f11());
console.log(f12());
