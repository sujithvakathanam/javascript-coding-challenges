/*
Stripping a Sentence Down
Create a function which takes in a sentence str and a string of characters chars and return the sentence but with all the specified characters removed.

Examples
stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") ➞ "th qck brwn fx jmps vr th lzy dg"

stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") ➞ "the hiing nake initerly lither acro the rutling leave"

stripSentence("gone, reduced to atoms", "go, muscat nerd") ➞ ""
Notes
You may be asked to remove punctuation and spaces.
Return an empty string if every character is specified (see example #3).
All tests will be in lowercase.
 */

// Please refer this url for pointers -https://www.rosettacode.org/wiki/Strip_a_set_of_characters_from_a_string#ES6
// Solution1 - Using array.map and array.includes
function stripSentence(str, chars) {
  let newArr = str.split('');
  let charArr = chars.split('');
  let returnArr = [];
  newArr.map((item,index) => charArr.includes(item) ? null : returnArr.push(item));
  return returnArr.join('');

}
console.log(stripSentence("the quick brown fox jumps over the lazy dog", "aeiou"))

// Solution2- using Es6- Array.filter and Array.includes
const stripSentence1 = (str, lst) => {
  return [...str].filter(chr => !lst.includes(chr)).join("");
}
console.log(stripSentence1("the quick brown fox jumps over the lazy dog", "aeiou"))

// Solution 3- Using string.replace and regex

const stripSentence3 = (str, chars) => str.replace(new RegExp(`[${chars}]`, "g"), "");
console.log(stripSentence3("the quick brown fox jumps over the lazy dog", "aeiou"))

