/* Name: How many arguments
 * Level: 7kyu
 * Instructions: Create a function called args_count that returns the number of arguments provided
 * args_count(1, 2, 3) -> 3
 * args_count(1, 2, 3, 10) -> 4
 */

const args_count = (...args) => args.length;
