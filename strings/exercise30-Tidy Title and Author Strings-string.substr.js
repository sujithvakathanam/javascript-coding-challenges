/*
Tidy Title and Author Strings
You have an array of strings, each consisting of a book title and an author's name.

To illustrate:

[
  ["   Death of a Salesman - Arthur Miller    "],
  ["   Macbeth - William Shakespeare    "],
  ["    A Separate Peace - John Knowles     "],
  [" Lord of the Flies - William Golding"],
  ["A Tale of Two Cities - Charles Dickens"]
]
Create a function that takes an array like the one above and transforms it into the same format as the one below:

[
  ["Death of a Salesman", "Arthur Miller"],
  ["Macbeth", "William Shakespeare"],
  ["A Separate Peace", "John Knowles"],
  ["Lord of the Flies", "William Golding"],
  ["A Tale of Two Cities", "Charles Dickens"]
]
Examples
tidyBooks([
  "     The Catcher in the Rye - J. D. Salinger    ",
  "    Brave New World - Aldous Huxley   ",
  "    Of Mice and Men - John Steinbeck    "
]) ➞ [
  "The Catcher in the Rye", "J. D. Salinger",
  "Brave New World", "Aldous Huley",
  "Of Mice and Men", "John Steinbeck"
]
Notes
Some of these entries have excess white space. Remove this white space in your final output.
 */

// Solution1- Using String.substr
function tidyBooks(arr) {
  let newArr = [];
  arr.forEach((arrItem, index, arr1)=>{
    if(typeof (arrItem) === 'string'){
      let str = arrItem;
      let index = str.indexOf('-');
      let book =  str.substr(0,index).trim();
      let author = str.substr(index + 1).trim();
      newArr.push([book, author])
    } else if(typeof (arrItem) === 'object'){
      arrItem.map((item,index,arr2) =>{
        newArr.push([arr2[index].trim().split('-').join()])
      })
    }
  });
  return newArr;

}

console.log(tidyBooks([
  "     The Catcher in the Rye - J. D. Salinger    ",
  "    Brave New World - Aldous Huxley   ",
  "    Of Mice and Men - John Steinbeck    "
]))

console.log(tidyBooks([
  ["   Death of a Salesman - Arthur Miller    "],
  ["   Macbeth - William Shakespeare    "],
  ["    A Separate Peace - John Knowles     "],
  [" Lord of the Flies - William Golding"],
  ["A Tale of Two Cities - Charles Dickens"]

]))
