/* Name: Convert number to reversed array of digits
 * Level: 8kyu
 * Instructions: Given a random number you have to return the digits of this
 * number within an array in reverse order.
 * Example:
 * 348597 => [7,9,5,8,4,3]
 */

const digitize = number => number.toString().split('').map(Number).reverse();
