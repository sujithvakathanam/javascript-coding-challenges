// eslint no-use-before-define: 0
/*
 *Recursion: Factorials
 *Write a function that calculates the factorial of a number recursively.
 *
 *Examples
 *factorial(5) ➞ 120
 *
 *factorial(3) ➞ 6
 *
 *factorial(1) ➞ 1
 *
 *factorial(0) ➞ 1
 *Notes
 *N/A
 */

// Solution1 -Please note this will take longer processing time-O(2^n)
function factorial (n) {
  if (n < 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

/*
 * Solution 2- Lesser time with closures by implementing caching --O(n)
 * Please note that you need to assign this fibonacciMaster closure function to another funtion
 */
function fibonacciMaster () { // O(n)
  const cache = {};

  return function fib (n) {
    // Base case
    if (n in cache) {
      return cache[n];
    }
    if (n < 2) {
      return 1;
    }
    cache[n] = n * fib(n - 1);

    // Please do not forget to return
    return cache[n];
  };
}

// Please do not forget to assign closure function to another function.
const fasterFib = fibonacciMaster();

console.log(fasterFib(5));

/* Solution 3 -Using Iterative*/
// Please note that here you construct the array upto the n iteratively
function factorial3 (n) {
  const arr = [1, 1];

  for (let i = 2; i <= n; i++) {
    arr[i] = i * arr[i - 1];
  }

  return arr[n];
}
console.log(factorial3(5));
