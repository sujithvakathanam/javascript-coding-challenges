/*
 *
 * Reverse the Order of Words with Five Letters or More
 * Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
 *
 * Examples
 * reverse("Reverse") ➞ "esreveR"
 *
 * reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"
 *
 * reverse("The dog is big.") ➞ "The dog is big."
 * Notes
 * You can expect a valid string to be provided for each test case.
 *
 */

// How to reverse a string- Convert into an array with split('') and then reverse it and then join it to get string back*/
function reverse (str) {
  const strArr = str.split(' ');

  return strArr.map(item => (item.length >= 5 ? item.split('').reverse()
    .join('') : item)).join(' ');
}

console.log(reverse('This is a typical sentence.'));
