/*
Sort Numbers in Descending Order
Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.

Examples
sortDescending(123) ➞ 321

sortDescending(1254859723) ➞ 9875543221

sortDescending(73065) ➞ 76530
Notes
You can expect non-negative numbers for all test cases.
 */

/*Solution1*/
function sortDescending(num) {
    if(Number.isInteger(num)){
        return Number(String(num).split('').map(x => Number(x)).sort((a,b) => b - a).join(''));
    }
}

console.log(sortDescending(1254859723));