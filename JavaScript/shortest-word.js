/* Name: Shortest Word
 * Level: 7kyu
 * Instructions: Simple, given a string of words, return the length of the
 * shortest word(s). String will never be empty and you do not need to account
 * for different data types.
 */

function findShort(s) {
  const words = s.split(' ');
  let lengths = [];

  for (word of words) {
    lengths.push(word.length);
  }

  return Math.min.apply(null, lengths);
}
