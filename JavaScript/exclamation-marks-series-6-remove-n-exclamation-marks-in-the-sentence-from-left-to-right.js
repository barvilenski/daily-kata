/* Name: Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
 * Level: 8kyu
 * Instructions: Remove n exclamation marks in the sentence from left to right. n is positive integer.
 *
 * Examples
 * remove("Hi!",1) === "Hi"
 * remove("Hi!",100) === "Hi"
 * remove("Hi!!!",1) === "Hi!!"
 * remove("Hi!!!",100) === "Hi"
 * remove("!Hi",1) === "Hi"
 * remove("!Hi!",1) === "Hi!"
 * remove("!Hi!",100) === "Hi"
 * remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
 * remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
 * remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
 * remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
 */

const remove = (s, n) => {
  return s.split('')
    .filter(char => {
                     if (char === '!') n--;
                     return char != '!' || n < 0;
            })
    .join('');
};
