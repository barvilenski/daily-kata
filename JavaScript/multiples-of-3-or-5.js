/* Name: Multiples of 3 or 5
 * Level: 6kyu
 * Description: If we list all the natural numbers below 10 that are multiples
 * of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Finish the solution so that it returns the sum of all the multiples of 3 or 5
 * below the number passed in.
 * Note, If the number is a multiple of both 3 and 5, only count it once.
 */

/* Helper function that gets a multiplier and a limit (natural numbers).
 * It returns the sum of the multiples up to the limit.
 */
function getMultSum(mult, limit) {
  // get the amount of multiples up to the limit
  let multCount = limit / mult;
  Number.isInteger(multCount) ? multCount-- : multCount = Math.floor(multCount);

  // calculate the sum of naturals up to the multiples amount
  const naturalsSum = multCount * (multCount + 1) / 2;

  // calculate the sum of multipless
  const multSum = mult * naturalsSum;

  return multSum;
}

function solution(number){
  return (getMultSum(5, number) + getMultSum(3, number) - getMultSum(15, number));
}
