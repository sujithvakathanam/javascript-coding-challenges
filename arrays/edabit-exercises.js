// 1.write a function to reverse an array
// eg : someArray = [1,2,34]

const reverseArray = (arr) => arr.reverse();
console.log(reverseArray([15,6,7,8]));

//2.How to remove the duplicates in an array
//eg: arr = ['John','Jay','John'] ==> after removing should retrun ['John','Jay']

//Solution 1 : indexOf returns -1 if there is no item, if there are duplicates-it returns the index of first item
let arr = ['John','Jay','Vikram','John','Sindbad','Vikram'];
function removeDups(arr){
    let unique = arr.filter((item,index) => arr.indexOf(item) === index);
    return unique;
}

console.log('Unique array returned is', removeDups(arr));

//Solution 2: Set operator returns the unique values from the array
function removeDups2(arr) {
    return [...new Set(arr)];
}

console.log('Unique array returned is', removeDups2(arr));

//Solution 3: ForEach and using Includes method
function removeDups3(arr) {
    let unique = [];
    arr.forEach(function(item) {
        if(!unique.includes(item)){
            unique.push(item);
        }
    })
    return unique;
}
console.log('Unique array returned is', removeDups3(arr));

//Solution 4: ForEach and using Includes method with ES6
function removeDups4(arr) {
    let unique = [];
    arr.forEach((item) =>  {
        if(!unique.includes(item)){
            unique.push(item);
        }
    })
    return unique;
}
console.log('Unique array returned is', removeDups4(arr));

//Find the missing no in array
let array = [5,8,2,1,3,4,7];

const  missingNo = function(array){
    let sortedArray = array.sort();
    console.log('sorted  arreay is ', sortedArray);
    let retArray =  sortedArray.filter(function (item, index) {
        return sortedArray.indexOf(item) + 1 === (index + 1);
    });

    return retArray;
}

console.log('ret array is ', missingNo(array));

//Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
//Solution 1
const sevenBoom = (arr) => {

    let isPresent = false;

    arr.forEach( function (item) {
        if (item.toString().includes('7')) {
            isPresent = true;
        }
    });
    return isPresent ? "Boom!" : "there is no 7 in the array";
}
console.log(sevenBoom([6,3,5,890,3]));

//Solution 2:
const sevenBoom1 = (arr) => arr.join("").indexOf('7') >= 0 ? "Boom!" : "there is no 7 in the array";

console.log(sevenBoom([6,3,5,890,3]));

let arr3= [5,78,9,7];
console.log(arr3.join()); //Output: 5,78,9,7
console.log(arr3.join("")); //Output: 57897
console.log(arr3.join('')); //Output: 57897

//Solution 3:
const sevenBoom2 = arr =>
    /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';
console.log(sevenBoom2(arr3));