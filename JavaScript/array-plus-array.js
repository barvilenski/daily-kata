/* Name: Array plus array
 * Level: 8kyu
 * Instructions: I'm new to coding and now I want to get the sum of two
 * arrays...actually the sum of all their elements. I'll appreciate for your help.
 *
 * P.S. Each array includes only integer numbers. Output is a number too.
 */

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((sum, cur) => sum + cur, 0);
