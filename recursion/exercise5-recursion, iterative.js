/*
 * The Fibonacci Number
 * Create a function that, given a number, returns the corresponding value of that index in the Fibonacci series.
 *
 *   Examples
 * fibonacci(3) ➞ 3
 *
 * fibonacci(7) ➞ 21
 *
 * fibonacci(12) ➞ 233
 * Notes
 * The first number in the sequence starts at 1 (not 0).
 */

// Solution1 -using iterative
function fibonacci (num) {
  // 1,1,2,3,5,8
  const arr = [1, 1];
  for (i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[num];
}

console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(12));

// Solution2 -using recursive
function fibonacci1 (num) {
  if (num < 2) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci1(3));
console.log(fibonacci1(7));
console.log(fibonacci1(12));
