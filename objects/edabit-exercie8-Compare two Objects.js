/*Check If objOne Is Equal to objTwo
Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.

Example #1
// The first object parameter.

{
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com"
}

// The second object parameter.
{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}


➞ false
Example #2
// The first object parameter.

{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}

// The second object parameter.

{
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}


➞ true
Notes
If you have a suggestion on how to make these instructions easier to understand, please leave a comment. Your feedback is greatly appreciated.
 */

/* Solution 1*/
/*function isEqual(objOne, objTwo) {
    return JSON.stringify(objOne) === JSON.stringify(objTwo);
}

const objOne = {
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
}

const objTwo = {
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
}
console.log(isEqual(objOne, objTwo));*/

/*Solution2*/
const isEqual = (a, b) => unique(a) == unique(b);

const unique = (obj, str) => typeof obj == "object" ?
    str + Object.keys(obj).map(x => unique(obj[x], str + x)).join("") :
    str + obj.toString();

const objOne = {
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
}

const objTwo = {
    name: "Benny",
    phone: "3325558745",
    email: "benny@edabit.com"
}
console.log(isEqual(objOne, objTwo));