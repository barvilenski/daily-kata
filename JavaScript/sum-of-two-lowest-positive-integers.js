/* Name: Sum of two lowest positive integers
 * Level: 7kyu
 * Instructions: Create a function that returns the sum of the two lowest
 * 8 positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
 *
 * For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 * [10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a-b);
  return numbers[0] + numbers[1];
};
