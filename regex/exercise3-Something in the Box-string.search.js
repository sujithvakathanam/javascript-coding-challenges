/*
 *
 * Something in the Box?
 * Create a function that returns true if an asterisk * is inside a box.
 *
 * Examples
 * inBox([
 *   "###",
 *   "#*#",
 *   "###"
 * ]) ➞ true
 *
 * inBox([
 *   "####",
 *   "#* #",
 *   "#  #",
 *   "####"
 * ]) ➞ true
 *
 * inBox([
 *   "*####",
 *   "# #",
 *   "#  #*",
 *   "####"
 * ]) ➞ false
 *
 * inBox([
 *   "#####",
 *   "#   #",
 *   "#   #",
 *   "#   #",
 *   "#####"
 * ]) ➞ false
 * Notes
 * The asterisk may be in the array, however, it must be inside the box, if it exists.
 *
 */

/* Solution 1 */ // - string.search method always returns -1 if no match or the index of the matched item
// Please note regex is expressed as /[]/g where g represents global search
function inBox (arr) {
  let found = false;
  const regex = /[*]/g;
  arr.forEach(item => (item.search(regex) === -1 ? found : item.search(regex) !== 0 && item.search(regex) !== item.length - 1 ? found = true : found));

  return found;
}

console.log(inBox([
  '####',
  '#* #',
  '#  #',
  '####'
]));
