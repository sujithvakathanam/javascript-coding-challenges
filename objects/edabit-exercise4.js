/*
 * Letter Occurrences Per Word
 * Create a function that takes in a sentence and a character to find. Return an object of each word in the sentence, with the count of the specified character as the value.
 *
 *     Examples
 * findOccurrences("Hello World", "o") ➞ {
 *     "hello" : 1,
 *         "world" : 1
 * }
 *
 * findOccurrences("Create a nice JUICY function", "c") ➞  {
 *     "create" : 1,
 *         "a" : 0,
 *         "nice" : 1,
 *         "juicy" : 1,
 *         "function" : 1
 * }
 *
 * findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A") ➞ {
 *     "an" : 1,
 *         "apple" : 1,
 *         "a" : 1,
 *         "day" : 1,
 *         "keeps" : 0,
 *         "archeologist" : 1,
 *         "away..." : 2
 * }
 * Notes
 * The function shouldn't be case sensitive.
 * Words in the dictionary should be in lowercase.
 *     You may be required to find punctuation.
 *     Duplicate words should be ignored (see example #3 for the word "an").
 */

// Solution 1
function findOccurrences (str, char) {
  const map = {};
  const newStr = Array.from(new Set(str.toLowerCase().split(' ')));

  const reg = new RegExp(char.toLowerCase(), 'gi'); // Flag - g represents global, i represents search everywhere. ie, dont stop at the first match

  newStr.map(item => {
    if (!map[item]) {
      // eslint-disable-next-line no-eq-null
      const count = item.match(reg) == null ? 0 : item.match(reg).length;
      map[item] = count;
    }
  });

  return map;
}

/*
 * Console.log(findOccurrences("Hello World", "o"));
 * console.log(findOccurrences("Create a nice JUICY function", "c"));
 */
console.log(findOccurrences('An APPLE a day keeps an Archeologist AWAY...', 'A'));
