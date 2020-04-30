/*

ReverseAndNot
Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

To illustrate:

123
We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

Examples
reverseAndNot(123) ➞ 321123

reverseAndNot(123456789) ➞ 987654321123456789
Notes
N/A

 */
/* Soltuion1

function reverseAndNot(i) {

    let arr2 = [...String(i)];
    let arr1 =[];
    while (i !==0){
        arr1.push(String(i%10));
        i = parseInt(i/10);
    }

    console.log(arr1);
    return parseInt(arr1.concat(arr2).reduce((acc,cv) => acc + cv));
}

let i = 123456789;
console.log(reverseAndNot(i));
*/

/*Solution2 - Be careful -reverse is destructive
function reverseAndNot(i) {

    let arr2 = [...String(i)]; // Num to string and then coverts it into each string within array
    console.log(arr2);
    let arr1 = arr2.reverse(); // Original array is modified. arr2 is modified here

    console.log(arr1);
    return arr1.concat(arr2)//.reduce((acc,cv) => acc + cv));
}

let i = 567;
console.log(reverseAndNot(i));

*/
function largestSwap(num) {
    let arr= [];
    let i = num;
    while (i >0 ) {
        arr.push(String(i%10));
        i = parseInt(i/10);
    }
    let reverse = arr.reduce((acc,cv) => acc + cv);
    console.log(num);
    console.log(reverse);

    if(num == reverse) return true
    else
    return num > reverse
}

let num = 99;
console.log(largestSwap(num));