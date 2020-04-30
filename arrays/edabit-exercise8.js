/*
Index Multiplier
Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

Examples
indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

indexMultiplier([-3, 0, 8, -6]) ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)
Notes
All items in the array will be integers.
 */

/*Solution 1

function indexMultiplier(arr) {
    let sum = 0;
    arr.forEach( (item, index) => {
        sum += item * index;
    } );
    return sum;
}

const arr = [5,7,7,9,7];

console.log(indexMultiplier(arr));

*/
/* Solution 2

function indexMultiplier(arr){
    let newArr = [];
    arr.map( (item, index) =>{
        newArr.push(item * index);
    })

    if(newArr.length !==0){
        let sum = newArr.reduce((accumulator, currentValue)=>{

            return accumulator + currentValue;
        });
        return sum;
    }
    return 0;

}

const arr = [5,7,7,9,7];

console.log(indexMultiplier(arr));
*/

/*Solution 3 */ //For reduce method- you can also pass index- please do not have squirly bracket
function  indexMultiplier(arr) {
    return arr.reduce((accumulator, currentValue, index) =>
            accumulator + (currentValue * index), 0);

}

const arr = [5,7,7,9,7];

console.log(indexMultiplier(arr));