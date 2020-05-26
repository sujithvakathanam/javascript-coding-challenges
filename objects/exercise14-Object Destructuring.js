// /*ES6: Destructuring Objects X
// Given an array of user objects.
//
// Let names = []
//
// Let users = [
//   { name: "John", email: "john@example.com" },
//   { name: "Jason", email: "jason@example.com" },
//   { name: "Jeremy", email: "jeremy@example.com" },
//   { name: "Jacob", email: "jacob@example.com" }
// ]
//
// For(/* add code inside these parenthesis only */) {
//   Names.push(name)
// }
//
// Console.log(names) // should log ["John", "Jason", "Jeremy", "Jacob"]
// Push the first names of all users in the names array.
//
//     Notes
// You only have to change the "for...of" loop parameters.
//     Ignore the const str assignment. This is only used for validation purposes.
//     Check the MDN docs to find out more about object destructuring in "for...of" loops (check the Resources tab).
// */

// Solution 1- Object destructuring -Please note that {name} can be used to destructure an object using for -of loop
// Useful urls: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
// Useful urls: https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
const names = [];

const users = [
  {name : 'John', email : 'john@example.com'},
  {name : 'Jason', email : 'jason@example.com'},
  {name : 'Jeremy', email : 'jeremy@example.com'},
  {name : 'Jacob', email : 'jacob@example.com'}
];

// eslint-disable-next-line no-unused-vars
const str = `
	// eslint-disable-next-line no-tabs
	for(let{name : n} of users) {
		names.push(n)
	}`;
