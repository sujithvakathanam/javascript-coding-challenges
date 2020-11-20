/*
 * https://edabit.com/challenge/WxiJviEJGK52AFps3
 * Transcribe to mRNA
 * Transcribe the given DNA strand into corresponding mRNA - a type of RNA, that will be formed from DNA after transcription. DNA has the bases A, T, G and C, while RNA converts to U, A, C and G respectively.
 *
 *   Examples
 * dnaToRna("ATTAGCGCGATATACGCGTAC") ➞ "UAAUCGCGCUAUAUGCGCAUG"
 *
 * dnaToRna("CGATATA") ➞ "GCUAUAU"
 *
 * dnaToRna("GTCATACGACGTA") ➞ "CAGUAUGCUGCAU"
 * Notes
 * Transcription is the process of making complementary strand.
 *   A, T, G and C in DNA converts to U, A, C and G respectively in mRNA.
 */

// Solution1- Using array.map
function dnaToRna (dna) {
  const result = [];
  dna.split('').map(item => {
    item === 'A' ? result.push('U') : null;
    item === 'T' ? result.push('A') : null;
    item === 'G' ? result.push('C') : null;
    item === 'C' ? result.push('G') : null;
  });

  return result.join('');
}

console.log(dnaToRna('CGATATA')); // GCUAUAU"

// Solution2- using str.replace and object, Please note the use of replace and object
function dnaToRna1 (dna) {
  const obj = {
    A : 'U',
    T : 'A',
    G : 'C',
    C : 'G'
  };

  return dna.replace(/[ATGC]/gi, m => obj[m]);
}

console.log(dnaToRna1('CGATATA')); // GCUAUAU"
