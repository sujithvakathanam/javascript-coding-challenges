/*
 *Ageing the Population...
 *Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.
 *
 *Examples
 *afterNYears({
 *  "Joel" : 32,
 *  "Fred" : 44,
 *  "Reginald" : 65,
 *  "Susan" : 33,
 *  "Julian" : 13
 *}, 1) ➞ {
 *  "Joel" : 33,
 *  "Fred" : 45,
 *  "Reginald" : 66,
 *  "Susan" : 34,
 *  "Julian" : 14
 *}
 *
 *afterNYears({
 *  "Baby" : 2,
 *  "Child" : 8,
 *  "Teenager" : 15,
 *  "Adult" : 25,
 *  "Elderly" : 71
 *}, 19) ➞ {
 *  "Baby" : 21,
 *  "Child" : 27,
 *  "Teenager" : 34,
 *  "Adult" : 44,
 *  "Elderly" : 90
 *}
 *
 *afterNYears({
 *  "Genie" : 1000,
 *  "Joe" : 40
 *}, 5) ➞ {
 *  "Genie" : 1005,
 *  "Joe" : 45
 *}
 *Notes
 *Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
 *n should be a positive number because last time I checked, people don't tend to age backwards. Therefore, use the absolute value of n.
 */

// Solution 1 Using Object.entries
function afterNYears (names, n) {
  n = Math.abs(n);
  const newObj = {};
  for (const [key, value] of Object.entries(names)) {
    newObj[key] = value + n;
  }

  return newObj;
}

console.log(afterNYears({
  Baby     : 2,
  Child    : 8,
  Teenager : 15,
  Adult    : 25,
  Elderly  : 71
}, 19));

// Solution 2 -Using Object.Keys and Object.values
function afterNYears1 (names, n) {
  n = Math.abs(n);
  const objValues = Object.values(names);
  const objKeys = Object.keys(names);

  const newObj = {};
  for (let i = 0; i < objValues.length; i++) {
    newObj[objKeys[i]] = objValues[i] + n;
  }

  return newObj;
}

console.log(afterNYears1({
  Baby     : 2,
  Child    : 8,
  Teenager : 15,
  Adult    : 25,
  Elderly  : 71
}, 19));

// Solution 3 -Using for in statement
const afterNYears2 = (list, n) => {
  for (const person in list) {
    list[person] += Math.abs(n);
  }

  return list;
};
console.log(afterNYears2({
  Baby     : 2,
  Child    : 8,
  Teenager : 15,
  Adult    : 25,
  Elderly  : 71
}, 19));
