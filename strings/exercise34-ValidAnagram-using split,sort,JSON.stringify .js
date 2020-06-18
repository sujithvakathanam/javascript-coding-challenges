/*
 *Given two strings s and t , write a function to determine if t is an anagram of s.
 *
 *Example 1:
 *
 *Input: s = "anagram", t = "nagaram"
 *Output: true
 *Example 2:
 *
 *Input: s = "rat", t = "car"
 *Output: false
 *Note:
 *You may assume the string contains only lowercase alphabets.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sortedS = s.split('').sort((a, b) => a > b);
  const sortedT = t.split('').sort((a, b) => a > b);
  if (JSON.stringify(sortedS) === JSON.stringify(sortedT)) {
    return true;
  }

  return false;
};

console.log(isAnagram('anagram', 'nagaram'));
