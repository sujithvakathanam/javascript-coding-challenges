/*
 * https://edabit.com/challenge/QQxJqZnfFN6mPcBCr
 * Dashed Vowels
 * Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).
 *
 * Examples
 * dashed("Edabit") ➞ "-E-d-a-b-i-t"
 *
 * dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"
 *
 * dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
 * Notes
 * A string can contain uppercase and lowercase vowels.
 *   Y is not considered a vowel.
 */

// Solution1 -using array.map
function dashed (str) {
  const newArr = [];
  const vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  // eslint-disable-next-line array-callback-return
  str.split('').map(item => {
    vowelArray.includes(item) ? newArr.push(`-${item}-`) : newArr.push(item);
  });

  return newArr.join('');
}

console.log(dashed('Edabit'));

// Solution2- using string.replace-- regex
function dashed1 (str) {
  return str.replace(/([aeiou])/gi, '-$1-');// Important to remember it
}

console.log(dashed1('Edabit'));

// Solution3- using string.match-- regex
function dashed2 (str) {
  return str.split('')
    .map(el => (el.match(/[aeiou]/i) ? el = `-${el}-` : el)) //match will return an array by default
    .join('');
}

console.log(dashed2('Edabit'));
