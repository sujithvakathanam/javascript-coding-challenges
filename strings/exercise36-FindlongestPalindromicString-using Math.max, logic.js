/*
 * Given a string s, find the longest palindromic substring in s. You may assume
 * that the maximum length of s is 1000.
 *
 * Example 1:
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *     Example 2:
 *
 * Input: "cbbd"
 * Output: "bb"
 */
function longestPalindromicString (str) {
  const palindrome = [];

  if (str.length === 1) {
    return str;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < str.length - 1; i++) {
    // eslint-disable-next-line no-plusplus
    for (let j = i + 1; j < str.length; j++) {
      const subStr = str.substr(i, j+1);
      const newStr = subStr.split('').reverse()
        .join('');
      if (newStr === subStr) {
        palindrome.push(subStr);
      }
    }
  }

  // Below code is used to find the array item with the longest length using rest operator
  console.log(palindrome);
  const longest = Math.max(...palindrome.map(item => item.length));

  let maxLen = 0;
  for (let i = 0; i < palindrome.length; i++) {
    if (palindrome[i].length > maxLen) {
      maxLen = palindrome[i].length;
    }
  }

  const result = palindrome.find(item => item.length === maxLen);
  if (result === undefined) {
    return '';
  }

  return result;
}

// console.log(longestPalindromicString(''));
// console.log(longestPalindromicString('a'));
// console.log(longestPalindromicString('bb'));
console.log(longestPalindromicString('cbbd'));

