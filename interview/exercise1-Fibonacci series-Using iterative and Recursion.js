// //https://edabit.com/challenge/DxCJgn8TtqAupmHxd
// Nth Fibonacci Number
// Create a function to return the Nth number in the Fibonacci sequence as a string.
//
//   Examples
// Fibonacci(10) ➞ "55"
//
// Fibonacci(20) ➞ "6765"
//
// Fibonacci(30) ➞ "832040"
//
// Fibonacci(40) ➞ "102334155"
//
// Fibonacci(50) ➞ "12586269025"
//
// Fibonacci(60) ➞ "1548008755920"
// Notes
// Your function is expected to calculate numbers greater than the 64-bit unsigned integer limit where n can be as large as but not greater than 200.

// Solution1- Using recursion--But this takes longer time to execute
function fibonacci (n) {
  const result = recursive(n);

  return String(result);
}

// eslint-disable-next-line consistent-return
function recursive (n) {
  // 1,1,2,3,5,8,13,21,34,55

  if (n < 1) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  let sum;
  if (n > 2) {
    sum = BigInt(recursive(n - 1)) + BigInt(recursive(n - 2));
  }

  return sum;
}

console.log(fibonacci(40));


//Solution2- Using Iterative--Use BigInt instead of Number if there are longer values

function fibonacci (n) {
  const arr = [BigInt(0), BigInt(1), BigInt(1)];
  for (let i = 3; i <= n; i++) {
    arr.push(BigInt(arr[i - 1] + arr[i - 2]));
  }

  return `${arr[n]}`;
}
console.log(fibonacci(40));

//Solution3- Using recurisive, This runs much faster
function fibonacci(n) {
  var res=fibonacci_series(n)
  return ''+res[res.length-1]

}
function fibonacci_series(n){
  if (n===1)return [0,1];
  else{var s=fibonacci_series(n-1);s.push(BigInt(s[s.length-1])+BigInt(s[s.length-2]));return s;}
}
