/* Name: Make the Deadfish swim
 * Level: 6kyu
 * Instructions: Write a simple parser that will parse and run Deadfish.
 *
 * Deadfish has 4 commands, each 1 character long:
 * i increments the value (initially 0)
 * d decrements the value
 * s squares the value
 * o outputs the value into the return array
 * Invalid characters should be ignored.
 *
 * parse("iiisdoso") => [ 8, 64 ]
 */

const parse = data => {
  let output = [];
  let sum = 0;
  
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case 'i':
        sum++;
        break;
      case 'd':
        sum--;
        break;
      case 's':
        sum *= sum;
        break;
      case 'o':
        output.push(sum);
        break;
    }
  }
  
  return output;
};
