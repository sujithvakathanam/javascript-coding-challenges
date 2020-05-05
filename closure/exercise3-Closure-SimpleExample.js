/*
 *Promises I: What Is a Closure?
 *Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.
 *
 *function parent(x) {
 *  return function closure() {    // Closure is declared here.
 *    return x
 *  }
 *}
 *
 *const remember = parent("remembers me")
 * Seems like the variable x would be gone after
 *parent is executed, but it's not.
 *
 *closure()
 *Returns "remembers me" because the inner
 *function remembers x.
 *Fix the greetingMaker() function so that it works with the greeting() function.
 *The greeting() function has already been created (check the Tests tab).
 *Example
 *const greeting = greetingMaker("Hello")
 *greeting("James") ➞ "Hello, James"
 *Notes
 *Check the Resources tab for more info on closures.
 */

// eslint-disable-next-line multiline-comment-style
// What is a closure?
// Function outside() {
//   Let x = 2
//   Return function inside(y) {
//     Return x * y
//   }
// }
// Let myClosure = outside()
// MyClosure(5)
// // 10// remember myClosure is outside(),
// // so then this is still the same thing:
//
// MyClosure(5) === outside()(5)
// // true
// Boom. It’s a short example, since a closure is just:
//     A function inside another function that: 1) uses variables from its parent scope and 2) is exposed to the outside world.

/* Solution*/
// https://itnext.io/a-beginners-guide-to-understanding-javascript-closures-b5eb57fdbeb4
function greetingMaker (salutation) {
  return function closure (name) {
    return `${salutation}, ${name}`;
  };
}
const greeting = greetingMaker('Hello'); // Calls outside function
console.log(greeting('James')); // This calls inside function--it is like greetingMaker('Hello') ('James')
