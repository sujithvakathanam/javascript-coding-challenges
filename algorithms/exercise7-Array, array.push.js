/*
 * https://edabit.com/challenge/BX7cQ3bxKzqrRJer8
 *  The Perrin Sequence
 * Each number in the Perrin sequence is created by summing the numbers two positions and three positions before it. The first three numbers are (3, 0, 2), and the sequence is extended as follows:
 *
 * P(0) P(1) P(2) P(3) P(4) P(5) P(6) P(7) ... P(n)
 * 3, 0, 2, 3, 2, 5, 5, 7, ...
 * Given a value for n, return the Perrin number P(n).
 *
 *   Examples
 * perrin(1) ➞ 0
 *
 * perrin(8) ➞ 10
 *
 * perrin(26) ➞ 1497
 * Notes
 * Check the Resources tab for a further explanation of the Perrin sequence.
 */

function perrin (n) {
  const arr = [3, 0, 2];
  for (i = 3; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 3]);
  }

  return arr[n];
}
console.log(perrin(1));
console.log(perrin(8));
console.log(perrin(26));
