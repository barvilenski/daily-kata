/* Name: get character from ASCII Value
 * Level: 8kyu
 * Instructions: Write a function getChar/GetChar/get_char which takes
 * a number and returns the corresponding ASCII char for that value.
 * 
 * Example:
 * getChar(65) # => 'A'
 * For ASCII table, you can refer to http://www.asciitable.com/
 */

const getChar = c => String.fromCharCode(c);
