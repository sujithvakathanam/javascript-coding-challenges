/*
Create a Book constructor that has two properties :

Title
Author
and two methods:

A method named getTitle that returns: "Title: " + the instance title.
A method named getAuthor that returns: "Author: " + the instance author.
and instantiate this constructor by creating 3 new books:

Pride and Prejudice - Jane Austen (PP)
Hamlet - William Shakespeare (H)
War and Peace - Leo Tolstoy (WP)
Name the new object instances PP, H, and WP, respectively.

For instance, if I instantiated the following book using this Book constructor function:

Harry Potter - J.K. Rowling (HP)
I would get the following properties and methods:

Examples
HP.title ➞ "Harry Potter"

HP.author ➞ "J.K. Rowling"

HP.getTitle() ➞ "Title: Harry Potter"

HP.getAuthor() ➞ "Author: J.K. Rowling"
Notes
Read more about constructor functions in the Resources tab.
Remember, after you've finished writing the constructor function, you must instantiate it through the creation of new objects.

 */

/*Solution 1 */

/*
function Book(title, author) {
    // Write your properties and methods here

    this.title = title;
    this.author = author;

    this.getTitle = function(){
        return `Title : ${this.title}`;
    };

    this.getAuthor = function() {
        return `Author : ${this.author}`;
    }
}

// Instantiate your Book constructor here
let PP = new Book("Pride and Prejudice", "Jane Austin");
let H = new Book("Hamlet", "Willian Shakespeare");
let WP =  new Book("War and Peace", "Leo Tolstoy");

console.log(H.title);
console.log(H.author);
console.log(H.getTitle());
console.log(H.getAuthor());

*/

/*Solution 2*/
class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    getTitle() {
        return `Title: ${this.title}`;
    }

    getAuthor()  {
        return `Author: ${this.author}`;
    }
}

let PP = new Book("Pride and Prejudice", "Jane Austin");
let H = new Book("Hamlet", "Willian Shakespeare");
let WP =  new Book("War and Peace", "Leo Tolstoy");

console.log(H.title);
console.log(H.author);
console.log(H.getTitle());
console.log(H.getAuthor());
