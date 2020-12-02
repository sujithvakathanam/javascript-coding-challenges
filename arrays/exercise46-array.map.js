/*
 * https://edabit.com/challenge/rBwM5LiDbaBqvdw67
 *  Potential Friend?
 *      Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests. Return true if there's a potential friend!
 *
 *      Examples
 *  isPotentialFriend(
 *      ["sports", "music", "chess"],
 *      ["coding", "music", "netflix", "chess"]
 *  ) ➞ true
 *
 *  isPotentialFriend(
 *      ["cycling", "technology", "drawing"],
 *      ["dancing", "drawing"]
 *  ) ➞ false
 *
 *  isPotentialFriend(
 *      ["history"],
 *      ["history"]
 *  ) ➞ true
 *  Notes
 *  Arrays of interests may have varied lengths.
 */

function isPotentialFriend (set1, set2) {
  if (set1.length && set2.length === 1 && set1[0] === set2[0]) {
    return true;
  }
  const commonArray = [];
  set1.map(item => (set2.includes(item) ? commonArray.push(item) : null));

  return commonArray.length >= 2;
}

console.log(isPotentialFriend(
  ['sports', 'music', 'chess'],
  ['coding', 'music', 'netflix', 'chess']
));
