/*
 *RegEx: Boundary Assertions I
 *Assume a program only reads .js or .jsx files. Write a function that accepts a file path and returns true if it can read the file and false if it can't.
 *
 *Examples
 *isJS("/users/user.jsx") ➞ true
 *
 *isJS("/users/user.js") ➞ true
 *
 *isJS("/users/user.ts") ➞ false
 *Notes
 *Use a RegEx boundary assertion in your function.
 */

/*
 * Solution 1- Boundary Type assertions.Check the link below
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions
 */

/*
 * Please note $ Matches the end of input.
 *  If the multiline flag is set to true, // also matches immediately before a line break character.
 *  For example, /t$/ does not match the "t" in "eater", but does match it in "eat".
 */

function isJS (path) {
  return path.match(/jsx$/) != null || path.match(/js$/) != null;
}

console.log(isJS('/users/user.csv'));
