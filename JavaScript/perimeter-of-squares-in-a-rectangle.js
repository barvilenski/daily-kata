/* Name: Perimeter of squares in a rectangle
 * Level: 5kyu
 * Instructions: The drawing shows 6 squares the sides of which have a length
 * of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these
 * squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
 *
 * Could you give the sum of the perimeters of all the squares in a rectangle when
 * there are n + 1 squares disposed in the same manner as in the drawing:
 * #Hint: See Fibonacci sequence

 * #Ref: http://oeis.org/A000045

 * The function perimeter has for parameter n where n + 1 is the number of squares
 * (they are numbered from 0 to n) and returns the total perimeter of all the squares.
 *
 * perimeter(5)  should return 80
 * perimeter(7)  should return 216
 * NOTE: due to a misspelling in the reference solution for random tests, have
 * an outer auxiliary function that calculates Fibonacci numbers, name this outer
 * function fib. (More than 500 CW passed the kata so it is now impossible to change the random tests).
 */

function perimeter(n) {
  const PHI = (Math.sqrt(5) + 1) / 2;                                                     // Constant which is part of the formula to caculate the nth Fibonacci number
  const fibNPlus3 = Math.round((Math.pow(PHI,n+3) - Math.pow(-PHI,-n-3)) / Math.sqrt(5)); // The formula to calculate the (n+3)th Fibonacci number
  return (fibNPlus3 - 1) * 4;                                                             // The sum of the Fibonacci numbers till fib(n) is: fib(n+2) - 1
}
