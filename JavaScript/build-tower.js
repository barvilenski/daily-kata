/* Name: Build Tower
 * Level: 6kyu
 * Instructions: Build Tower by the following given argument:
 * number of floors (integer and always greater than 0).
 * Tower block is represented as *
 * JavaScript: returns an Array;
 * Have fun!
 *
 * for example, a tower of 3 floors looks like below
 * [
 *   '  *  ',
 *   ' *** ',
 *   '*****'
 * ]
 * and a tower of 6 floors looks like below
 * [
 *   '     *     ',
 *   '    ***    ',
 *   '   *****   ',
 *   '  *******  ',
 *   ' ********* ',
 *   '***********'
 * ]
 */

function towerBuilder(nFloors) {
  let tower = [];

  for (let i = 0; i < nFloors; i++) {
    let spaces = ' '.repeat(nFloors - 1 - i);
    let asterisks = '*'.repeat(i * 2 + 1);

    tower.push(`${spaces}${asterisks}${spaces}`);
  }

  return tower;
}
