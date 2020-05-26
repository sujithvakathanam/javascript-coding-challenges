// *RegEx: Character Classes VIII ⁠- \d
// *You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.
// *
// *Here are a list of the characters classes in JavaScript:
// *
// *., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// *Extract the addresses from this string:
// *
// *Const str = "123 Redding Dr. 1560 Knoxville Ave. 3030 Norwalk Dr. 5 South St."
// *
// *// ["123 Redding Dr.", "1560 Knoxville Ave", "3030 Norwalk Dr.", "5 South St."]
// *Write the regular expression that matches all street addresses. All street addresses begin with a number. Use the character class \d in your expression.
// *
// *Notes
// *Check the Resources tab for details on character classes if you're stuck.

/*
 * Solution 1
 * Please use below link to test Regex
 * https://regex101.com/
 * Character classes are explained well here -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
 */

function testRegex (str) {
  // Const REGEXP = /\d\w*/g; // This returns ['123', '1560','3030','5']
  // Const REGEXP = /\d\w*\s\w*/g; // This returns [ '123 Redding', '1560 Knoxville', '3030 Norwalk', '5 South' ]
  const REGEXP = /\d\w*\s\w*\s\w*./g; // Please note . symbol is included in Regex

  return str.match(REGEXP);
}
const str = '123 Redding Dr. 1560 Knoxville Ave. 3030 Norwalk Dr. 5 South St.';

console.log(testRegex(str));
