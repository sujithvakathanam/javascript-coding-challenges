/*
 * https://edabit.com/challenge/zQm9YZTTFPhNtYjDr
 * Secret Society
 * A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
 *
 *   Create a function that takes in an array of names and returns the name of the secret society.
 *
 *   Examples
 * societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
 *
 * societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
 *
 * societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
 * Notes
 * The secret society's name should be entirely uppercased.
 */

function societyName (friends) {
  const result = [];
  friends.map(friend => {
    result.push(friend.split('')[0]);
  });

  return result.sort().join('');
}

console.log(societyName(['Adam', 'Sarah', 'Malcolm']));
