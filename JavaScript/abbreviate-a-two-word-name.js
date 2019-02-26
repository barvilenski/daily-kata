/* Name: Abbreviate a Two Word Name
 * Level: 8kyu
 * Instructions: Write a function to convert a name into initials.
 * This kata strictly takes two words with one space in between them.
 *
 * The output should be two capital letters with a dot seperating them.
 *
 * It should look like this:
 * Sam Harris => S.H
 * Patrick Feeney => P.F
 */

const abbrevName = name => name.split(' ')[0][0].toUpperCase() + '.' + name.split(' ')[1][0].toUpperCase();
