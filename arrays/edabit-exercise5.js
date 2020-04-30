/*Write a function that converts an object into an array of keys and values.
// Array into objects
    Convert Key, Values in an Object to Array
    Examples
objectToArray({
    D: 1,
    B: 2,
    C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

*/

//Solution 1: using Object.entries
let sampleObject = {
    likes : 2,
    dislikes : 3,
    followers : 10
}

function objectToArray(obj){
    let array=[];
    for(let [key,value] of Object.entries(obj)){
        array.push([key,value]);
    }
    return array;
}

console.log(objectToArray(sampleObject));

//Solution 2: Object.keys

function objectToArray1(obj){
    return Object.keys(obj).map(key => [key, obj[key]]); //Please note that an array of elements are returned here
}
console.log(objectToArray1(sampleObject))