/*
No Hidden Fees
Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

Examples
hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") ➞ false

hasHiddenFee(["$1", "$2", "$3"], "$6") ➞ false

hasHiddenFee(["$1"], "$4") ➞ true
Notes
Remember that each price is given as a string.
 */

/* Solution1*/
function hasHiddenFee(prices, t) {

    let sum = prices.reduce( (acc, cv) =>
       acc + Number(cv.replace('$', '').replace('"','').trim())
    ,0);
    console.log('sum is', sum);
    console.log('number is', Number(t.replace('$','').replace('"','').trim()));

    if(sum == Number(t.replace('$',''))){
        return true;
    }
    return false;
}

console.log(hasHiddenFee(["$1", "$2", "$3"], "$6"));

/*Solution 2*/

const hasHiddenFee1 = (prices, t) =>
    prices.reduce((acc,cur) => acc + +cur.slice(1), 0) < +t.slice(1);

console.log(hasHiddenFee(["$1", "$2", "$3"], "$6"));
