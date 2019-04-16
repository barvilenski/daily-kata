/* Name: Framed Reflection
 * Level: 6kyu
 * Instructions: You are given a message (text) that you choose to read in a mirror (weirdo).
 * Return what you would see, complete with the mirror frame.
 *
 * Example:
 * 'Hello World'
 * would give:
 * *********
 * * olleH *
 * * dlroW *
 * *********
 * 
 * Words in your solution should be left-aligned.
 */

const mirror = text => {
  const lineLength = text.split(' ').reduce((maxLength, word) => maxLength > word.length ? maxLength : word.length, 0) + 4;
  const reversedWords = text.split(' ').map(word => word.split('').reverse().join('') + ' '.repeat(lineLength - word.length - 4));
  let framedText = '*'.repeat(lineLength) + '\n';
  reversedWords.forEach(word => framedText += `* ${word} *\n`);
  framedText += '*'.repeat(lineLength);
  return framedText;
};
