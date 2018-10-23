/* Name: Your order, please
 * Level: 6kyu
 * Description: Your task is to sort a given string. Each word in the String
 * will contain a single number. This number is the position the word should
 * have in the result. Note: Numbers can be from 1 to 9. So 1 will be the first
 * word (not 0). If the input String is empty, return an empty String. The
 * words in the input String will only contain valid consecutive numbers.
 * Example: order("is2 Thi1s T4est 3a"), should return: "Thi1s is2 3a T4est"
*/

function compare(a, b) {
  if (Number(a.match(/\d/)) < Number(b.match(/\d/))) {
    return -1;
  } else if (Number(a.match(/\d/)) === Number(b.match(/\d/))) {
    return 0;
  } else {
    return 1;
  }
}

function order(words) {
  return words.split(' ').sort(compare).join(' ');
}
