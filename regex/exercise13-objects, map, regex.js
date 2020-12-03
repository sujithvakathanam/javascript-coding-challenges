/*
 * https://edabit.com/challenge/xuRjEej9F9ZG3vg7M
 * Replace Vowel with Another Character
 * Create a function that takes a string and replaces the vowels with another character.
 *
 *   a = 1
 * e = 2
 * i = 3
 * o = 4
 * u = 5
 * Examples
 * replaceVowel("karachi") ➞ "k1r1ch3"
 *
 * replaceVowel("chembur") ➞ "ch2mb5r"
 *
 * replaceVowel("khandbari") ➞ "kh1ndb1r3"
 * Notes
 * The input will always be in lowercase.
 */

// Solution1 -using array.map and array.push
function replaceVowel (word) {
  const obj = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5
  };

  const resultArray = [];
  [...word].map(i => (obj[i] !== undefined ? resultArray.push(obj[i]) : resultArray.push(i)));

  return resultArray.join('');
}

console.log(replaceVowel('karachi'));

// Solution2 -using array.map alone
function replaceVowel1 (word) {
  const obj = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5
  };

  return [...word].map(i => (obj[i] !== undefined ? obj[i] : i)).join('');
}

console.log(replaceVowel1('karachi'));

// Solution3 using regex
function replaceVowel2 (word) {
  const obj = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5
  };

  return word.replace(/[aeiou]/g, el => obj[el]); // Important, replace value can be written as lambda expression
}

console.log(replaceVowel2('karachi'));
