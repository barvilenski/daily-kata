/* Name: Sum Mixed Array
 * Level: 8kyu
 * Instructions: Given an array of integers as strings and numbers, return the sum of
 * the array values as if all were numbers.
 * 
 * Return your answer as a number.
 */

const sumMix = x => x.map(val => Number(val)).reduce((sum, num) => sum + num, 0);
