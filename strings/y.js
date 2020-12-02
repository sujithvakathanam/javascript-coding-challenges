/*
 * Is it True?
 *     In this challenge you will be given a relation between two numbers, written as a string.
 *
 *     Here are some example inputs:
 *
 *     "2 = 2", "8 < 7", "5 = 13", "15 > 4"
 * Write a function that determines if the relation is true or false.
 *
 *     Examples
 * isTrue("2 = 2") ➞ true
 *
 * isTrue("8 < 7") ➞ false
 *
 * isTrue("5 = 13") ➞ false
 *
 * isTrue("15 > 4") ➞ true
 * Notes
 * Tests will only have three types of relations: =, >, and <
 * Many approaches work here, but the eval() function is particularly useful!
 */

function isTrue (relation) {
  // eslint-disable-next-line no-param-reassign
  relation = relation.includes('=') ? relation.replace('=', '==') : relation;

  // eslint-disable-next-line no-eval
  return eval(relation);
}
console.log(isTrue('2=2'));
