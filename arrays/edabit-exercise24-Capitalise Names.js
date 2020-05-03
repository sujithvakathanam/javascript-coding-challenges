// *Capitalize the Names
// *Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.
// *
// *Examples
// *CapMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]
// *
// *CapMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
// *
// *CapMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
// *Notes
// *Don't change the order of the original array.
// *Notice in the second example above, "MABELLE" is returned as "Mabelle".
// */

function capMe (arr) {
  return arr.map((item, index, arr) => arr[index] = item[0].toUpperCase() + item.slice(1).toLowerCase());
}

console.log(capMe(['samuel', 'MABELLE', 'letitia', 'meridith']));
