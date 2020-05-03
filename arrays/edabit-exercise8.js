// *Index Multiplier
// *Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
// *
// *Examples
// *IndexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// *// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
// *
// *IndexMultiplier([-3, 0, 8, -6]) ➞ -2
// *// (-3*0 + 0*1 + 8*2 + -6*3)
// *Notes
// *All items in the array will be integers.

//  *Solution 1
//  *
//  *Function indexMultiplier(arr) {
//  *  Let sum = 0;
//  *  Arr.forEach( (item, index) => {
//  *      Sum += item * index;
//  *  } );
//  *  Return sum;
//  *}
//  *
//  *Const arr = [5,7,7,9,7];
//  *
//  *Console.log(indexMultiplier(arr));
//  *
// /*

// /*Solution 2
// */
// *
// * Function indexMultiplier(arr){
// *  Let newArr = [];
// *  Arr.map( (item, index) =>{
// *      NewArr.push(item * index);
// *  })
// *
// *  If(newArr.length !==0){
// *      Let sum = newArr.reduce((accumulator, currentValue)=>{
// *
// *          Return accumulator + currentValue;
// *      });
// *      Return sum;
// *  }
// *  Return 0;
// *
// * }
// *
// * Const arr = [5,7,7,9,7];
// *
// * Console.log(indexMultiplier(arr));
// */

/* Solution 3 */ // For reduce method- you can also pass index- please do not have squirly bracket
function indexMultiplier (arr) {
  return arr.reduce((accumulator, currentValue, index) => accumulator + currentValue * index, 0);
}

const arr = [5, 7, 7, 9, 7];

console.log(indexMultiplier(arr));
