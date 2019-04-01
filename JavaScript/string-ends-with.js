/* Name: String ends with?
 * Level: 8kyu
 * Instructions: Complete the solution so that it returns true if the first
 * argument(string) passed in ends with the 2nd argument (also a string).
 *
 * Examples:
 * solution('abc', 'bc') // returns true
 * solution('abc', 'd') // returns false
 */

const solution = (str, ending) => str.slice(-ending.length) === ending;
