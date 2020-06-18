// A pangram is a sentence containing every letter in the English Alphabet.
function isPangram (sentence) {
  const regex = /([a-z])(?!.*\1)/g;

  return (sentence.match(regex) || []).length === 26;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));
