/*
Purge and Organize
Given an array of numbers, write a function that returns an array that...

Has all duplicate elements removed.
    Is sorted from least to greatest value.
    Examples
uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]

uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]

uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
Notes
N/A
*/
/* Solution 1
function uniqueSort(arr) {
let arrayWithoutDuplicates = [];

arr.forEach((item)=>{

   if (!arrayWithoutDuplicates.includes(item)){
       arrayWithoutDuplicates.push(item);
   }
})
    arrayWithoutDuplicates.sort( (a,b) => a - b);
    return arrayWithoutDuplicates;
}

let arr = [13,6,2,3,6,9,5];
console.log(uniqueSort(arr));
*/

/* Solution 2 - Uses new Set() and Array.from */

let arr = [13,6,2,3,6,9,5];
function uniqueSort(arr) {
    let newArr = new Set(arr); // The Set object lets you store unique values of any type, whether primitive values or object references.
    console.log(newArr);
    let arrWithoutDuplicates =  Array.from(newArr);//The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
    console.log(arrWithoutDuplicates);
    return arrWithoutDuplicates.sort((a, b) => a > b);
}

console.log(uniqueSort(arr));
