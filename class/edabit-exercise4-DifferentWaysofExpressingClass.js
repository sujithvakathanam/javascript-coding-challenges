/*
 * https://edabit.com/challenge/B48vyMsHdRtu39rfh
 * Design Patterns I: JavaScript Classes?!?
 *   JavaScript doesn't really have classes like other languages. They are actually functions behind the scenes. There are several ways to create classes.
 *
 * Challenge
 * Create a Book class using a JavaScript function - instantiable.
 *   It should have a author and published property.
 *
 *   Create an Author class using a literal object - singleton.
 *
 *   It should have a name and books property.
 *
 *   Create a Publisher class by using the new constructor and an anonymous function - singleton.
 *
 *   It should have a authors and books property.
 *
 *   Create a Review class using a class declaration - instantiable.
 *
 *   It should have a rating and user property.
 * Bonus (optional)
 * Create a Bookstore class using an IIFE - singleton. It should have a books and prices property.
 *
 *   Notes
 * All classes should begin with Capital letters.
 *   All class properties should have default(initial) values.
 *   There are a few other ways to make classes but are not in this challenge, you can check the Resources tab to learn more.
 */

// Create a Book class using a JavaScript function - instantiable.
function Book () {
  this.author = 'author';
  this.published = 'published';
}

// Create an Author class using a literal object - singleton.
const Author = {
  name  : 'name',
  books : 'books'
};

// Create a Publisher class by using the new constructor and an anonymous function - singleton.
const Publisher = new function () {
  this.authors = 'authors';
  this.books = 'books';
}();

//   Create a Review class using a class declaration - instantiable.
class Review {
  constructor () {
    this.user = 'user';
    this.rating = 'rating';
  }
}

/*
 *  Create a Bookstore class using an IIFE - singleton. It should have a books and prices property.
 * An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
 *  https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 */
// eslint-disable-next-line no-unused-vars
const Bookstore = (function() {
  return {
    books: "books",
    prices: "prices"
  }
})();
