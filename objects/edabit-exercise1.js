
// Solution 1 */

function Book (title, author) {
  // Write your properties and methods here

  this.title = title;
  this.author = author;

  this.getTitle = function () {
    return `Title : ${this.title}`;
  };

  this.getAuthor = function () {
    return `Author : ${this.author}`;
  };
}

// Instantiate your Book constructor here
const PP = new Book('Pride and Prejudice', 'Jane Austin');
const H = new Book('Hamlet', 'Willian Shakespeare');
const WP = new Book('War and Peace', 'Leo Tolstoy');

console.log(H.title);
console.log(H.author);
console.log(H.getTitle());
console.log(H.getAuthor());

// Solution 2

class Book1 {
  constructor (title, author) {
    this.title = title;
    this.author = author;
  }

  getTitle () {
    return `Title: ${this.title}`;
  }

  getAuthor () {
    return `Author: ${this.author}`;
  }
}

// eslint-disable-next-line no-unused-vars
const PP1 = new Book1('Pride and Prejudice', 'Jane Austin');
const H1 = new Book1('Hamlet', 'Willian Shakespeare');
// eslint-disable-next-line no-unused-vars
const WP1 = new Book1('War and Peace', 'Leo Tolstoy');

console.log(H1.title);
console.log(H1.author);
console.log(H1.getTitle());
console.log(H1.getAuthor());
