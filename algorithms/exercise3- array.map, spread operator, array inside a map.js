/*
 * RNA Reverse Complement
 * Create a function that finds the reverse complement of a ribonucleic acid (RNA) strand. The RNA will be represented as a string containing only the characters "A", "C", "G" and "U". Since RNA can only (canonically) allow pairings of A/U and G/C, the complement of an RNA would be as follows:
 *
 * original -> complement
 * "AAA" -> "UUU"
 * "UUU" -> "AAA"
 * "GGG" -> "CCC"
 * "CCC" -> "GGG"
 * "GGAACC" -> "CCUUGG"
 * Your function should find the complement on the right AND also reverse the resulting string.
 *
 *   Examples
 * reverseComplement("GUGU") ➞ "ACAC"
 *
 * reverseComplement("UCUCG") ➞ "CGAGA"
 *
 * reverseComplement("CAGGU") ➞ "ACCUG"
 * Notes
 * You can assume all input sequences will be valid.
 */

// Using Solution 1
function reverseComplement (sequence) {
  const result = [];
  [...sequence].reverse().map(item => result.push(obj[item]));

  return result.join('');
}

const obj = {
  A : 'U',
  U : 'A',
  G : 'C',
  C : 'G'
};

console.log(reverseComplement('CAGGU'));

// Solution2 -Note that within a map function, you can create an array
function reverseComplement1 (sequence) {
  return [...sequence].reverse().map(item => [obj[item]])
    .join('');
}

console.log(reverseComplement1('CAGGU'));
