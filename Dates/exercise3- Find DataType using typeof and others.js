/*
 * What's the Data Type?
 *Create a function that returns the data type of a given variable. These are the eight data types this challenge will be testing for:
 *
 *Array
 *Object
 *String
 *Number
 *Boolean
 *Null
 *Undefined
 *Date
 *Examples
 *dataType([1, 2, 3, 4]) ➞ "array"
 *
 *dataType({key: "value"}) ➞ "object"
 *
 *dataType("This is an example string.") ➞ "string"
 *
 *dataType(new Date()) ➞ "date"
 *Notes
 *Return the name of the data type as a lowercase string.
 */

/*
 * Solution
 * Please note that typeof(undefined) is 'undefined'
 * Please note typeof array is an object, hence use Array.isArray()
 * Please note type of null is an object, hence use null
 * Please note date is an instance of newDate(). Hence use instanceOf
 */

function dataType (value) {
  // eslint-disable-next-line init-declarations
  let result;
  if (Array.isArray(value)) {
    result = 'array';
  } else if (value instanceof Date) {
    result = 'date';
  } else if (value === null) {
    result = 'null';
  } else {
    result = typeof value;
  }

  return result;
}

console.log(dataType(null));
console.log(dataType(new Date()));
console.log(dataType([4, 5, 6, 7]));
console.log(dataType({key : 'value'}));
console.log(dataType(undefined));
