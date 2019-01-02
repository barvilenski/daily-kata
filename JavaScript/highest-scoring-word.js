/* Name: Highest Scoring Word
 * Level: 6kyu
 * Instructions: Given a string of words, you need to find the highest scoring word.
 *
 * Each letter of a word scores points according to it's position in the alphabet:
 * a = 1, b = 2, c = 3 etc.
 *
 * You need to return the highest scoring word as a string.
 *
 * If two words score the same, return the word that appears earliest in the original string.
 *
 * All letters will be lowercase and all inputs will be valid.
 */

function high(words) {
  const scores = words.split(' ').map(word => word.split('').reduce((acc, cur) => acc + cur.charCodeAt(0) - 'a'.charCodeAt(0), 0));
  const indexOfMax = scores.indexOf(Math.max(...scores));
  return words.split(' ')[indexOfMax];
}
