/*
 * https://edabit.com/challenge/kPLz93JtyjK77LFDP
 * Recursion: GCD
 * Write a function that calculates the GCD (Greatest Common Divisor) of two numbers recursively.
 *
 *   Examples
 * gcd(10, 20) ➞ 10
 *
 * gcd(1, 3) ➞ 1
 *
 * gcd(5, 7) ➞ 1
 *
 * gcd(2, 6) ➞ 2
 * Notes
 * N/A
 */

// Solution1 -Using iteration
function gcd (a, b) {
  const newArr = [];
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      newArr.push(i);
    }
  }

  return Math.max(...newArr);
}

console.log(gcd(5, 7));
console.log(gcd(2, 6));
console.log(gcd(10, 20));

// Solution2 - Using recursive--important big%small
function gcd1 (a, b) {
  const small = Math.min(a, b);
  const big = Math.max(a, b);
  if (big % small === 0) {
    return small;
  }

  return gcd(small, big % small);
}
console.log(gcd1(5, 7));
console.log(gcd1(2, 6));
console.log(gcd1(10, 20));
