/*
String Flips
Create a function that takes a string as the first argument, and a (string) specification as a second argument. If the specification is "word", return a string with each word reversed while maintaining their original order. If the specification is "sentence", reverse the order of the words in the string, while keeping the words intact.

Examples
str = "There's never enough time to do all the nothing you want"


flip("Hello", "word") ➞ "olleH"

flip("Hello", "sentence") ➞ "Hello"

flip(str, "word") ➞ "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw"

flip(str, "sentence") ➞ "want you nothing the all do to time enough never There's"
Notes
N/A
 */

/*Solution1- How to reverse a string. Use Split to split by character and then reverse and then join as below*/
// split will return an array and reverse is applied on an array
function flip(str, spec) {
    let newArr = str.split(" ");
    let reg = new RegExp(",", "gi");
    let retArray = [];

    if(spec == "word"){

        retArray.push(newArr.map( x => x.split('').reverse().join('')));
    }
    else if(spec =="sentence")
    {
        while (newArr.length >0){
            retArray.push(newArr.pop());
        }
    } else return "Unknown";

    return retArray.join(",").replace(reg,' ');
}

const str = "There's never enough time to do all the nothing you want";
console.log(flip(str,"word"));

/*Solution 2*/
const flip1 = (str, spec) => {
        spec === 'word'
        ? str
            .split(' ')
            .map(word => word.split('').reverse().join(''))
            .join(' ')
        : str
            .split(' ')
            .reverse()
            .join(' ');

}
const str1 = "There's never enough time to do all the nothing you want";
console.log(flip1(str1,"word"));


