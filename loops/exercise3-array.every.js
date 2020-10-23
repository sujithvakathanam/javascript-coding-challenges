// Omnipresent Value
// A value is omnipresent if it exists in every subarray inside the main array.
//
//   To illustrate:
//
//   [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Create a function that determines whether an input value is omnipresent for a given array.
//
//   Examples
// IsOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
//
// IsOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
//
// IsOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true
//
// IsOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false
// Notes
// Sub-arrays can be any length.

// Solution1: Using array.every
function isOmnipresent (arr, val) {
  const check = cv => cv.includes(val);

  return arr.every(check);
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
