/* Name: Double Char
 * Level: 8kyu
 * Instructions: Given a string, you have to return a string in which each
 * character (case-sensitive) is repeated once.
 *
 * doubleChar("String") ==> "SSttrriinngg"
 * doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
 * doubleChar("1234!_ ") ==> "11223344!!__  "
 * Good Luck!
 */

const doubleChar = str => str.split('').map(char => char.concat(char)).join('');
