/*
 * Move Capital Letters to the Front
 * Create a function that moves all capital letters to the front of a word.
 *
 *   Examples
 * capToFront("hApPy") ➞ "APhpy"
 *
 * capToFront("moveMENT") ➞ "MENTmove"
 *
 * capToFront("shOrtCAKE") ➞ "OCAKEshrt"
 * Notes
 * Keep the original relative order of the upper and lower case letters the same.
 */

// Solution1 -how to find if a letter is Uppercase or not
function capToFront (s) {
  const arr = s.split('');
  const capArr = [];
  const lowArr = [];
  arr.map((item, index) => (isUpperCase(item) ? capArr.push(item) : lowArr.push(item)));

  return capArr.concat(lowArr).join('');
}

function isUpperCase (item) {
  return item.toUpperCase() === item;
}
console.log(capToFront('shOrtCAKE'));

// Solution2--Using string.match that returns an array
function capToFront1 (s) {
  return s.match(/[A-Z]/g).join('') + s.match(/[a-z]/g).join('');
}

console.log(capToFront1('shOrtCAKE'));


