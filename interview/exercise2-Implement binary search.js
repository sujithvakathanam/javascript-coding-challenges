/*
 * Algorithms: Binary Search
 * Create a function that finds a target number in a list of prime numbers. Implement a binary search algorithm in your function. The target number will be from 2 through 97. If the target is prime then return "yes" else return "no".
 *
 *   Examples
 * var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
 *
 *
 * isPrime(primes, 3) ➞ "yes"
 *
 * isPrime(primes, 4) ➞ "no"
 *
 * isPrime(primes, 67) ➞ "yes"
 *
 * isPrime(primes, 36) ➞ "no"
 * Notes
 * You could use built-in functions to solve this, but the point of this challenge is to see if you understand the binary search algorithm.
 *   The solution is in the Resources tab.
 */

/*
 * Function isPrime (primes, num) {
 *   return primes.includes(num) ? 'yes' : 'no';
 * }
 *
 * const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
 * console.log(isPrime(primes, 3));
 */

// Solution2 -using binary search
function isPrime1 (primes1, num) {
  let start = 0;
  let end = primes1.length - 1;
  let result = null;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (primes1[middle] === num) {
      result = num;

      return 'yes';
    }
    if (num < primes1[middle]) {
      end = middle - 1;
    } else if (num > primes1[middle]) {
      start = middle + 1;
    }
  }

  return 'no';
}

const primes1 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
console.log(isPrime1(primes1, 17));
