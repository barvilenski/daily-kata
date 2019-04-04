/* Name: Changing letters
 * Level: 7kyu
 * Instructions: When provided with a String, capitalize all vowels
 * For example:
 * Input : "Hello World!"
 * Output : "HEllO WOrld!"
 */

const vowels = ['a', 'e', 'i', 'o', 'u'];
const swap = st => st.split('').map(ch => vowels.includes(ch) ? ch.toUpperCase() : ch).join('');
