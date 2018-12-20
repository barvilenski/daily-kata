/* Name: Format a string of names like 'Bart, Lisa & Maggie'.
 * Level: 6kyu
 * Instructions: Given: an array containing hashes of names.
 * Return: a string formatted as a list of names separated by commas except for the
 * last two names, which should be separated by an ampersand.
 *
 * Example:
 * list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
 * // returns 'Bart, Lisa & Maggie'
 * list([ {name: 'Bart'}, {name: 'Lisa'} ])
 * // returns 'Bart & Lisa'
 * list([ {name: 'Bart'} ])
 * // returns 'Bart'
 * list([])
 * // returns ''
 *
 * Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
 */

function list(names) {
  names = names.map(name => name.name);
  switch (names.length) {
    case 0: return '';
    case 1: return names[0];
    case 2: return `${names[0]} & ${names[1]}`;
    default: return names.slice(0, names.length - 2).join(', ') + ', ' + names.slice(names.length - 2).join(' & ');
  }
}
