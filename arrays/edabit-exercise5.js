// Write a function that converts an object into an array of keys and values.
// *// Array into objects
// *  Convert Key, Values in an Object to Array
// *  Examples
// *ObjectToArray({
// *  D: 1,
// *  B: 2,
// *  C: 3
// *}) ➞ [["D", 1], ["B", 2], ["C", 3]]
// *
// *ObjectToArray({
// *  Likes: 2,
// *  Dislikes: 3,
// *  Followers: 10
// *}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

// Solution 1: using Object.entries
const sampleObject = {
  likes     : 2,
  dislikes  : 3,
  followers : 10
};

function objectToArray (obj) {
  const array = [];
  for (const [key, value] of Object.entries(obj)) {
    array.push([key, value]);
  }

  return array;
}

console.log(objectToArray(sampleObject));

// Solution 2: Object.keys

function objectToArray1 (obj) {
  return Object.keys(obj).map(key => [key, obj[key]]); // Please note that an array of elements are returned here
}
console.log(objectToArray1(sampleObject));
