/* Name: Complementary DNA
 * Level: 7kyu
 * Instructions: Deoxyribonucleic acid (DNA) is a chemical found in the nucleus
 * of cells and carries the "instructions" for the development and functioning of living organisms.
 *
 * In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
 * You have function with one side of the DNA (string, except for Haskell);
 * you need to get the other complementary side. DNA strand is never empty or there
 * is no DNA at all (again, except for Haskell).
 *
 * More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

 * DNAStrand ("ATTGC") # return "TAACG"
 * DNAStrand ("GTAT") # return "CATA"
 */

function DNAStrand(dna) {
  const complements = { 'A': 'T', 'T': 'A', 'C':'G', 'G': 'C' };
  return dna.split('').map(letter => complements[letter]).join('');
}
