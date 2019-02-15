/* Name: Next bigger number with the same digits
 * Level: 4kyu
 * Description: You have to create a function that takes a positive integer number
 * and returns the next bigger number formed by the same digits:
 * 12 ==> 21
 * 513 ==> 531
 * 2017 ==> 2071
 *
 * If no bigger number can be composed using those digits, return -1:
 * 9 ==> -1
 * 111 ==> -1
 * 531 ==> -1
 */

function nextBigger(number) {
  const digits = number.toString().split('').map(Number).reverse();
  const pivot = digits.findIndex((_, idx, arr) => arr[idx-1] > arr[idx]);

  if (pivot === -1) {
    return -1;
  }

  const min = Math.min(...digits.slice(0, pivot).filter(digit => digit > digits[pivot]));
  const minIdx = digits.indexOf(min);

  [digits[pivot], digits[minIdx]] = [digits[minIdx], digits[pivot]];
  return Number(digits.slice(0, pivot).sort((a, b) => b-a).concat(digits.slice(pivot)).reverse().join(''));
}
