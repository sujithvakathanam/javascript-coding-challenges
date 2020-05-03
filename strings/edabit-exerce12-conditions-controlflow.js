/*
 * Say "Hello" Say "Bye"
 * Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
 *
 * Examples
 * sayHelloBye("alon", 1) ➞ "Hello Alon"
 *
 * sayHelloBye("Tomi", 0) ➞ "Bye Tomi"
 *
 * sayHelloBye("jose", 0) ➞ "Bye Jose"
 * Notes
 * The name you return must be capitalized.
 */

// Solution 1 with Arrays and Strings*/
function sayHelloBye (name, num) {
  const nameWithoutFirstLetter = name.split('').slice(1)
    .join('');
  const firstChar = name.charAt(0).toUpperCase();

  return num === 1 ? `Hello ${firstChar}${nameWithoutFirstLetter}` : `Bye ${firstChar}${nameWithoutFirstLetter}`;
}

console.log(sayHelloBye('Tomi', 0));

/* Solution 2 with Strings*/// Please check name[0] and name.slice();

function sayHelloBye1 (name, num) {
  const name1 = name[0].toUpperCase() + name.slice(1);

  return num === 1 ? `Hello ${name1}` : `Bye ${name1}`;
}

console.log(sayHelloBye1('Tomi', 0));
