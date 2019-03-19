/* Name: Convert string to camel case
 * Level: 6kyu
 * Instructions: Complete the method/function so that it converts dash/underscore delimited words
 * into camel casing. The first word within the output should be capitalized only if the original
 * word was capitalized.
 * 
 * Examples:
 * toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
 * toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
 */

const toCamelCase = str => str.split(/-|_/).map((word, idx) => idx ? word.charAt(0).toUpperCase() + word.slice(1) : word).join('');
