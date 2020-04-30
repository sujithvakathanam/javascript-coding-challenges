/*
Concatenate Variable Number of Input Arrays
Create a function that concatenates n input arrays, where n is variable.

Examples
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
Notes
Arrays should be concatenated in order of the arguments.
 */

/*Solution 1: ...args is a spread operator that iterates over the elements of the array
reduce method  executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
concat method  is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
 */

function concat(...args) {
    if (args.length !=0){
        return args.reduce((accumulator, current)=>{

            return accumulator.concat(current);
        });
    } else{
        console.log('There are no items in the arguments')
        return 0;
    }
}

console.log('output is',concat(['a','b'],[1,2,3])); // [a,b,1,2,3]

console.log('output is',concat([],[1,2,3])); // [1,2,3]

console.log('output is',concat([5,5,5,],[5,5]));

console.log('output is',concat());