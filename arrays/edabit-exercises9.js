/*
Sort an Array by String Length
Create a function that takes an array of strings and return an array, sorted from shortest to longest.

    Examples
sortByLength(["Google", "Apple", "Microsoft"])
➞ ["Apple", "Google", "Microsoft"]

sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

sortByLength(["Turing", "Einstein", "Jung"])
➞ ["Jung", "Turing", "Einstein"]
Notes
All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.
*/

/*Solution1*/
function sortByLength(arr) {

    return arr.sort((a,b) => a.length - b.length)
}

const arr = ["Leonardo", "Michelangelo", "Raphael", "Donatello"];
console.log(sortByLength(arr));