/*
 *Remove Repeated Letters
 *Create a function which replaces all repeated letters in a word with single letters.
 *
 *Examples
 *removeRepeats("aaabbbccc") ➞ "abc"
 *
 *removeRepeats("bookkeeper") ➞ "bokeper"
 *
 *removeRepeats("nananana") ➞ "nananana"
 *Notes
 *N/A
 *
 */

function removeRepeats (str) {
  const newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      newStr.push(str[i]);
    }
  }

  return newStr.join('');
}
console.log(removeRepeats('bookkeeper'));
