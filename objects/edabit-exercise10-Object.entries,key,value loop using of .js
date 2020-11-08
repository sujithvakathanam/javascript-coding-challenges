/*
 * Who's The Oldest?
 * Given an object containing the names and ages of a group of people, return the name of the oldest person.
 *
 * Examples
 * oldest({
 *   Emma: 71,
 *   Jack: 45,
 *   Amy: 15,
 *   Ben: 29
 * }) ➞ "Emma"
 *
 * oldest({
 *   Max: 9,
 *   Josh: 13,
 *   Sam: 48,
 *   Anne: 33
 * }) ➞ "Sam"
 * Notes
 * All ages will be different.
 */

// Solution 1 using Object.entries
function oldest (people) {
  const objValues = Object.values(people);

  const maxAge = objValues.reduce((acc, cv) => (cv > acc ? acc = cv : acc), 0);

  let maxAgeName = null;

  // Please note that if you use in below, it will not work...
  for (const [key, value] of Object.entries(people)) {
    if (value === maxAge) {
      maxAgeName = key;
    }
  }

  return maxAgeName;
}

console.log(oldest({
  Max  : 9,
  Josh : 13,
  Sam  : 48,
  Anne : 33
}));

// Solution 2- using Object.keys and reduce method--Bit complicated
function oldest1 (people) {
  return Object.keys(people).reduce((acc, cv) => (people[acc] > people[cv] ? acc : cv));
}

console.log(oldest1({
  Max  : 9,
  Josh : 13,
  Sam  : 48,
  Anne : 33
}));
