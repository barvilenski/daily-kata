/* Name: Asterisk it
 * Level: 7kyu
 * Instructions: You are given a function that must insert an asterisk between every pair
 * of even digits in an integer n, that should be converted to a string(toString), received
 * as parameter and return it.
 * 
 * n can be a string/an array containing integers only.
 * 
 * If n is an array, put the elements together then put the asterisk, treating them as a string.
 * e.g. [1, 2, 4, 8, 16] ==> "12*4*816"
 * 
 * Here we will consider all the numbers that n % 2 == 0 as even numbers.
 * 
 * Have fun!
 */

const asteriscIt = n => n.toString()
                         .split('')
                         .filter(char => char !== ',')
                         .reduce((acc, _, idx, arr) =>
                                   acc + arr[idx] +
                                   (arr[idx] % 2 === 0 && arr[idx + 1] % 2 === 0 ? '*' : '')
                                   , '');
