/*
 * https://edabit.com/challenge/DQR6rjLkFtKgoqgWX
 * Stock Picker
 * Create a function that takes an array of integers that represent the amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on day x and selling stock on day y where y>x.
 *
 *   If given the following array:
 *
 *   [44, 30, 24, 32, 35, 30, 40, 38, 15]
 * ... your program should return 16 because at index 2 the stock was worth $24 and at the index 6 the stock was then worth $40, so if you bought the stock at 24 and sold it on 40, you would have made a profit of $16, which is the maximum profit that could have been made with this list of stock prices.
 *
 *   If there is no profit that could have been made with the stock prices, then your program should return -1 (e.g. [[10, 9, 8, 2]] should return -1).
 *
 * Examples
 * stockPicker([10, 12, 4, 5, 9]) ➞ 5
 *
 * stockPicker([14, 20, 4, 12, 5, 11]) ➞ 8
 *
 * stockPicker([80, 60, 10, 8]) ➞ -1
 * Notes
 * N/A
 */

// Solution1 -Using logic- o(n^2)
function stockPicker (arr) {
  const profitArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      arr[j] > arr[i] ? profitArr.push(arr[j] - arr[i]) : null;
    }
  }

  return Math.max(...profitArr, -1);
}

console.log(stockPicker([10, 12, 4, 5, 9]));
console.log(stockPicker([14, 20, 4, 12, 5, 11]));
console.log(stockPicker([80, 60, 10, 8]));

// Solution2 -Using array.reduce-Interestinglogic --Difficult to understand
function stockPicker1 (arr) {
  return arr.reduce((max, n, i, a) => {
    const m = Math.max(...a.slice(i+1).map(x => x-n).filter(x => x))
    return max && max>m ? max : m
  }, -1)
}

console.log(stockPicker1([10, 12, 4, 5, 9]));
console.log(stockPicker1([14, 20, 4, 12, 5, 11]));
console.log(stockPicker1([80, 60, 10, 8]));
