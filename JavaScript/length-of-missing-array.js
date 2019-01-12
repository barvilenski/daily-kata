/* Name: Length of missing array
 * Level: 6kyu
 * Instructions: You get an array of arrays.
 * If you sort the arrays by their length, you will see, that their length-values are consecutive.
 * But one array is missing!
 *
 * You have to write a method, that return the length of the missing array.
 *
 * Example:
 * [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
 *
 * If the array of arrays is null/nil or empty, the method should return 0.
 *
 * When an array in the array is null or empty, the method should return 0 too!
 * There will always be a missing element and its length will be always between the given arrays.
 */

function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null || arrayOfArrays.length === 0 || arrayOfArrays.some(arr => arr === null || arr.length === 0))
    return 0;
  const lens = arrayOfArrays.map(arr => arr.length).sort((a,b) => a - b);
  return lens.find((elem, idx, arr) => arr[idx + 1] > arr[idx] + 1) + 1;
}
