/*
 * The Reverser!
 *   The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.
 *
 * Examples
 * reverse("Hello World") ➞ "DLROw OLLEh"
 *
 * reverse("ReVeRsE") ➞ "eSrEvEr"
 *
 * reverse("Radar") ➞ "RADAr"
 * Notes
 * There will be no punctuation in any of the test cases.
 */

// Solution 1
function reverse (str) {
  const newArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    newArr.push(isItemUpperCase(str[i]) ? str[i].toLowerCase() : str[i].toUpperCase());
  }

  return newArr.join('');
}

function isItemUpperCase (item) {
  const result = item.toUpperCase() === item;

  return result;
}

console.log(reverse('Hello World'));

// Solution 2-- Using spread operator and reverse
const reverse1 = txt => [...txt]
  .reverse()
  .map(item => (item.toUpperCase() === item ? item.toLowerCase() : item.toUpperCase()))
  .join('');

console.log(reverse1('Hello World'));
