/*
Capitalize the Last Letter
Create a function that capitalizes the last letter of every word.

Examples
capLast("hello") ➞ "hellO"

capLast("My Name Is Edabit") ➞ "MY NamE IS EdabiT"

capLast("HELp THe LASt LETTERs CAPITALISe") ➞ "HELP THE LAST LETTERS CAPITALISE"
Notes
There won't be any cases of punctuation in the tests.
 */

// Solution 1
function capLast(txt) {
  let temp = [];
  txt.split(' ').map((item) => temp.push(item.slice(0,item.length-1) + item[item.length-1].toUpperCase()));
  return temp.join(' ');
}

console.log(capLast("My Name Is Edabit"));